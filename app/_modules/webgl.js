import { getStroke } from "perfect-freehand"

// Based on https://github.com/quidmonkey/particle_test/blob/master/webgl.v3.html
// and vanillia.js project file

class WebGLEngine {
  constructor(selector) {
    this.content = document.querySelector(selector ?? "#cstdraw")
    this.width = Math.min(this.content.clientWidth, 1000)
    this.height = this.content.clientHeight
    this.count = { index: 1, value: 1000 }

    this.mouse = { x: 0, y: 0 }
    this.gesture = {
      isActive: false,
      touches: [],
    }
    this.inputPoints = [[0, 0], [100, 100], []]
    // this.inputPoints = []

    this.cancelAnimationFrame = (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame)?.bind(window) || clearTimeout

    this.initCanvas()
    this.initContextWebGL()
  }

  initCanvas() {
    this.canvas = document.createElement("canvas")
    this.canvas.className = "canvas"
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.content.appendChild(this.canvas)
  }

  initContextWebGL() {
    // options 중 antialias(안티앨리어싱: 계단현상)
    const gl = this.canvas.getContext("webgl", { antialias: false })
    if (!gl) throw "*** ERROR: WebGL Unsupported ***"
    // 깊이 비교를 활성화하고 깊이 버퍼를 업데이트합니다. https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/depthFunc 를 참조하십시오
    gl.enable(gl.DEPTH_TEST)
    this.gl = gl
  }

  initProgramWebGL(shaderStrings) {
    const gl = this.gl
    let { fragmentString, vertexString } = shaderStrings
    const fragmentShader = initShader(gl, fragmentString, gl.FRAGMENT_SHADER)
    const vertexShader = initShader(gl, vertexString, gl.VERTEX_SHADER)
    this.prgGL = createProgramGL(gl, [fragmentShader, vertexShader], ["a_coords", "a_sizes"])
    gl.useProgram(this.prgGL)
  }

  initLocations() {
    const gl = this.gl
    const prg = this.prgGL
    this.coordsLoc = gl.getAttribLocation(prg, "a_coords")
    this.sizesLoc = gl.getAttribLocation(prg, "a_sizes")
    this.positionsLoc = gl.getAttribLocation(prg, "a_positions")

    let resolutionLoc = gl.getUniformLocation(prg, "u_resolution")
    gl.uniform2f(resolutionLoc, gl.canvas.width, gl.canvas.height)

    this.timeLoc = gl.getUniformLocation(prg, "u_time")

    this.mouseLoc = gl.getUniformLocation(prg, "u_mouse")

    this.baseColorLoc = gl.getUniformLocation(prg, "u_baseColor")
    this.borderColorLoc = gl.getUniformLocation(prg, "u_borderColor")
    gl.uniform4fv(this.baseColorLoc, [1, 1, 1, 1])
    gl.uniform4fv(this.borderColorLoc, [0, 0, 0, 1])

    this.borderSizeLoc = gl.getUniformLocation(prg, "u_borderSize")
    gl.uniform1f(this.borderSizeLoc, 1)
  }

  initEvents() {
    this.canvas.addEventListener("mousemove", (event) => this.gestureMove(event), false)
    this.canvas.addEventListener("touchmove", (event) => this.gestureMove(event), false)

    this.canvas.addEventListener("mousedown", (event) => this.gestureStart(event), false)
    this.canvas.addEventListener("touchstart", (event) => this.gestureStart(event), false)

    this.canvas.addEventListener("mouseup", (event) => this.gestureEnd(event), false)
    this.canvas.addEventListener("touchend", (event) => this.gestureEnd(event), false)
  }

  bufferDataWebGL() {
    const gl = this.gl
    this.fillVertices()

    this.sizesBuf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, this.sizesBuf)
    gl.bufferData(gl.ARRAY_BUFFER, this.sizes, gl.DYNAMIC_DRAW)
    gl.enableVertexAttribArray(this.sizesLoc)
    gl.vertexAttribPointer(this.sizesLoc, 1, gl.FLOAT, false, 0, 0)

    this.coordsBuf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, this.coordsBuf)
    gl.bufferData(gl.ARRAY_BUFFER, this.coords, gl.DYNAMIC_DRAW)
    gl.enableVertexAttribArray(this.coordsLoc)
    gl.vertexAttribPointer(this.coordsLoc, this.FLOATS_PER_VERT, gl.FLOAT, false, 0, 0)

    this.positionsBuf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionsBuf)
    gl.enableVertexAttribArray(this.positionsLoc)
    gl.vertexAttribPointer(this.positionsLoc, 2, gl.FLOAT, false, 0, 0)

    console.log("WebGL vertices to draw:", this.coords.length / this.FLOATS_PER_VERT)
  }

  fillVertices() {
    this.FLOATS_PER_VERT = 4 // x, y, z, vx
    this.coords = new Float32Array(this.FLOATS_PER_VERT * this.rects.length)
    this.sizes = new Float32Array(this.rects.length)
    for (var i = 0, len = this.rects.length; i < len; i++) {
      this.setVertex(i)
    }
  }

  setVertex(index) {
    const jj = index * this.FLOATS_PER_VERT
    this.coords[jj] = ~~this.rects[index][0] // pos.x
    this.coords[jj + 1] = ~~this.rects[index][1] // pos.y
    this.coords[jj + 2] = this.rects[index][2] // zOrder
    this.coords[jj + 3] = this.rects[index][3] // vel.x
    this.sizes[index] = ~~this.rects[index][4] // halfSize
    console.log(this.coords)
  }

  spawnRectangles() {
    const { count, width, height } = this
    const rnd = Math.random
    const rects = []
    const zStep = 0.8 / count.value
    for (let i = 0, iz = count.value; i < iz; i++) {
      const x = rnd() * width
      const y = rnd() * height
      const speedX = -1 - rnd()
      const halfSize = (10 + rnd() * 40) / 2
      const zOrder = 0.1 + i * zStep
      rects.push([x, ~~y, zOrder, speedX, ~~halfSize])
    }
    this.rects = Object.freeze(rects)
  }

  render() {
    this.cancelAnimationFrame(this.request)
    this.initProgramWebGL(this.getShaderStrings())
    this.initLocations()
    this.initEvents()
    this.time = 0

    this.spawnRectangles()
    this.bufferDataWebGL()
    this.request = requestAnimationFrame(() => this.step())
  }

  step() {
    ++this.time
    // this.setTime()
    this.gl.uniform1f(this.timeLoc, this.time)
    this.draw()

    // this.meter.tick()
    this.request = requestAnimationFrame(() => this.step())
  }

  setTime() {
    this.gl.uniform1f(this.timeLoc, this.time)
  }

  draw() {
    this.gl.drawArrays(this.gl.POINTS, 0, this.rects.length)
  }

  smoothstep(min, max, value) {
    var x = Math.max(0, Math.min(1, (value - min) / (max - min)))
    return x * x * (3 - 2 * x)
  }

  gestureStart(event) {
    // console.log("gestureStart", event)

    this.gesture.isActive = true
    this.inputPoints = []
  }

  gestureMove(event) {
    // console.log("gestureMove", event)

    if (!this.gesture.isActive) return

    let position

    if (event?.touches) {
      const { left, top } = event.target.getBoundingClientRect()
      position = { x: event.touches[0].pageX - left, y: event.touches[0].pageY - top }
    } else position = { x: event.screenX, y: event.screenY }

    const x = this.smoothstep(0, this.width, position.x)
    const y = this.smoothstep(0, this.height, position.y)

    this.gesture.touches[0] = { x, y }
    this.inputPoints = [...this.inputPoints, [position.x, position.y]]

    this.gl.uniform2f(this.mouseLoc, this.gesture.touches[0].x, this.gesture.touches[0].y)
  }

  gestureEnd(event) {
    // console.log("gestureEnd", event)
    const strokes = getStroke(this.inputPoints).flat()
    let aa = new Float32Array(strokes.length)
    // aa = aa.map((_, i) => strokes[i])
    console.log(this.coords)
    aa.forEach((_, i) => {
      let ii = i * 4
      this.coords[ii] = ~~strokes[i]
      this.coords[ii + 1] = ~~strokes[i + 1]
      return
    })
    console.log(this.coords)

    this.gl.bufferData(this.gl.ARRAY_BUFFER, this.coords, this.gl.DYNAMIC_DRAW)
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.coordsBuf)

    // this.gl.enableVertexAttribArray(this.coordsLoc)
    // this.gl.vertexAttribPointer(this.coordsLoc, this.FLOATS_PER_VERT, this.gl.FLOAT, false, 0, 0)

    // this.gl.bufferData(this.gl.ARRAY_BUFFER, aa, this.gl.DYNAMIC_DRAW)

    this.gesture.isActive = false
  }

  getShaderStrings() {
    // Use 'WebGL GLSL Editor' extension in VSCode for code highlight

    // 정점 쉐이더
    const vertexString = /*glsl*/ `
      attribute vec4 a_coords;
      attribute float a_sizes;
      attribute vec2 a_positions;

      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      varying vec2 v_pos;
      varying float v_size;

      // convert to clip space (normalized range of -1 to 1)
      vec2 clip(vec2 vertex) {
        return vertex / u_resolution * 2.0 - 1.0;
      }

      void main() {
        // float delta = a_coords.w * u_time + a_coords.x;
        // float x = mod(delta, u_resolution.x);

        //   v_pos = vec2(x, a_coords.y);

        // gl_Position = vec4(clip(v_pos), a_coords.z, 1);
        // gl_PointSize = a_sizes * 1.;
        

        // v_size = a_sizes;
        
      }
      ` // end of vertexString

    // 픽셀 쉐이더
    const fragmentString = /*glsl*/ `
      // precision lowp float;
      // precision mediump float;
      precision highp float;

      varying vec2 v_pos;
      varying float v_size;

      uniform float u_time;
      uniform float u_borderSize;
      uniform vec4 u_baseColor;
      uniform vec4 u_borderColor;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;


      float plot(vec2 st, float pct){
        return  smoothstep(pct-0.02, pct, st.y) -
                smoothstep(pct, pct+0.02, st.y);
      }

      void main () {
  // could do something fun with u_time
  // float theta = sin( u_time ) * 0.5 + 0.5;
  // float screenX = gl_FragCoord.x / u_resolution.x;
  // gl_FragColor = vec4( grad.x, grad.y, screenX, 1.0 );

        // canonic way is to use step() or smoothstep() instead of 'if'
        // see https://blog.scottlogic.com/2019/10/17/sculpting-shapes-with-webgl-fragment-shader.html
        // for more details of how it can be done (with nice anti-aliasing)


        vec2 st = gl_FragCoord.xy/u_resolution.xy;
        float y = smoothstep(0., 1., st.y*abs(sin(u_time*0.025)));

        float pct = plot(st, y);
        // float mx = u_mouse.x
        // float my = u_mouse.y

        vec3 color = vec3(u_mouse,  y);

        if (
              gl_FragCoord.y>v_pos.y+v_size-u_borderSize
              ||
              gl_FragCoord.y<v_pos.y-v_size+u_borderSize
              ||
              gl_FragCoord.x>v_pos.x+v_size-u_borderSize
              ||
              gl_FragCoord.x<v_pos.x-v_size+u_borderSize
            ) 

          gl_FragColor = vec4(color, 1.0);
          
          // gl_FragColor = u_borderColor;
          else 
          gl_FragColor = vec4(color, 1.0);

          // gl_FragColor = u_borderColor;

          // vec3 color2 = vec3(0.0);
      
          // // Each result will return 1.0 (white) or 0.0 (black).
          // float left = step(0.9, st.x);   // Similar to ( X greater than 0.1 )
          // float bottom = step(0.9, st.y); // Similar to ( Y greater than 0.1 )
      
          // // The multiplication of left*bottom will be similar to the logical AND.
          // color2 = vec3( left * bottom );
      
          gl_FragColor = vec4(color,1.0);
      }
      ` // end of fragmentString
    return { fragmentString, vertexString }
  }

  // MouseMove(event) {
  //   function smoothstep(min, max, value) {
  //     var x = Math.max(0, Math.min(1, (value - min) / (max - min)))
  //     return x * x * (3 - 2 * x)
  //   }
  //   const x = smoothstep(0, this.width, event.clientX)
  //   const y = smoothstep(0, this.height, event.clientY)
  //   console.log(x, y)
  //   this.mouseX = x
  //   this.mouseY = y

  //   // requestAnimationFrame(() => this.setMouse())
  //   // this.gl.uniform2f(this.mouseLoc, this.mouseX, this.mouseY)
  // }
  // MouseDown(event) {
  //   console.log(event)
  //   if (event.button === 0) console.log("left mouse button")
  //   if (event.button === 1) console.log("middle mouse button")
  //   if (event.button === 2) console.log("right mouse button")
  // }
  // MouseWheel(event) {
  //   console.log(event)
  // }
} // end of class WebGLEngine

// document.addEventListener("DOMContentLoaded", () => {
//   const engine = new WebGLEngine()
//   engine.render()
// })
export default WebGLEngine

function initShader(gl, source, type) {
  let shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    console.log("Shader Source: ", source)
    throw '*** Error compiling shader "' + type + '":' + gl.getShaderInfoLog(shader) + " ***"
  }
  return shader
}

function createProgramGL(gl, shaders, attributes, locations) {
  let program = gl.createProgram()
  let i, len

  for (i = 0, len = shaders.length; i < len; i++) {
    gl.attachShader(program, shaders[i])
  }

  if (attributes) {
    for (i = 0, len = attributes.length; i < len; i++) {
      gl.bindAttribLocation(program, locations ? locations[i] : i, attributes[i])
    }
  }
  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program)
    throw "*** Error in program linking:" + gl.getProgramInfoLog(program) + "***"
  }
  return program
}
