"use client"

import {useState} from "react"
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"

import ant_design from "public/images/ant_design.svg"
import AWS from "public/images/AWS.svg"
import CSS from "public/images/CSS.svg"
import Docker from "public/images/Docker.svg"
import emotion from "public/images/emotion.svg"
import Express from "public/images/Express.svg"
import Figma from "public/images/Figma.svg"
import Firebase from "public/images/Firebase.svg"
import Git from "public/images/Git.svg"
import GitHub_Actions from "public/images/GitHub_Actions.svg"
import GitHub from "public/images/GitHub.svg"
import HTML from "public/images/HTML.svg"
import JavaScript from "public/images/JavaScript.svg"
import LaTeX from "public/images/LaTeX.svg"
import Markdown from "public/images/Markdown.svg"
import Material_UI from "public/images/Material_UI.svg"
import MongoDB from "public/images/MongoDB.svg"
import mysql from "public/images/mysql.svg"
import next from "public/images/next.svg"
import NGINX from "public/images/NGINX.svg"
import Node from "public/images/Node.svg"
import NPM from "public/images/NPM.svg"
import Postman from "public/images/Postman.svg"
import react_query from "public/images/react_query.svg"
import React from "public/images/React.svg"
import Redux from "public/images/Redux.svg"
import Sass from "public/images/Sass.svg"
import Slack from "public/images/Slack.svg"
import Socket_io from "public/images/Socket_io.svg"
import Storybook from "public/images/Storybook.svg"
import Swagger from "public/images/Swagger.svg"
import Swift from "public/images/Swift.svg"
import Tailwind from "public/images/Tailwind.svg"
import TypeScript from "public/images/TypeScript.svg"

const list = [
  {icon: ant_design, x: "-0vw", y: "-0vh"},
  {icon: AWS, x: "-5vw", y: "-5vh"},
  {icon: CSS, x: "-10vw", y: "-10vh"},
  {icon: Docker, x: "-15vw", y: "-10vh"},
  {icon: emotion, x: "-20vw", y: "-20vh"},
  {icon: Express, x: "-25vw", y: "-10vh"},
  {icon: Figma, x: "-30vw", y: "-10vh"},
  {icon: Firebase, x: "-35vw", y: "-10vh"},
  {icon: Git, x: "-40vw", y: "-10vh"},
  {icon: GitHub_Actions, x: "-35vw", y: "-10vh"},
  {icon: GitHub, x: "-30vw", y: "-10vh"},
  {icon: HTML, x: "-25vw", y: "-10vh"},
  {icon: JavaScript, x: "-20vw", y: "-10vh"},
  {icon: LaTeX, x: "-10vw", y: "-10vh"},
  {icon: Markdown, x: "-10vw", y: "-10vh"},
  {icon: Material_UI, x: "-10vw", y: "-10vh"},
  {icon: MongoDB, x: "-10vw", y: "-10vh"},
  {icon: mysql, x: "-10vw", y: "-10vh"},
  {icon: next, x: "-10vw", y: "-10vh"},
  {icon: NGINX, x: "-10vw", y: "-10vh"},
  {icon: Node, x: "-10vw", y: "-10vh"},
  {icon: NPM, x: "-10vw", y: "-10vh"},
  {icon: Postman, x: "-10vw", y: "-10vh"},
  {icon: react_query, x: "-10vw", y: "-10vh"},
  {icon: React, x: "-10vw", y: "-10vh"},
  {icon: Redux, x: "-10vw", y: "-10vh"},
  {icon: Sass, x: "-10vw", y: "-10vh"},
  {icon: Slack, x: "-10vw", y: "-10vh"},
  {icon: Socket_io, x: "-10vw", y: "-10vh"},
  {icon: Storybook, x: "-10vw", y: "-10vh"},
  {icon: Swagger, x: "-10vw", y: "-10vh"},
  {icon: Swift, x: "-10vw", y: "-10vh"},
  {icon: Tailwind, x: "-10vw", y: "-10vh"},
  {icon: TypeScript, x: "-10vw", y: "-10vh"}
]

function customSin(x) {
  var angleInRadians = 2 * x + Math.PI / 6
  return Math.sin(angleInRadians) * 100
}

const Skills = () => {
  const {ref: skillsRef} = useInView()

  return (
    <div className="relative w-full h-full">
      {list.map(({icon: Icon, x, y}, index) => (
        <motion.div
          className={`absolute`}
          animate={{
            x: `calc(-50% + 0vw)`,
            y: `calc(-50% + ${index * 5}vh)`
          }}
          style={{
            top: "50%",
            left: "50%"
            // transform: "translate(-50%, -50%)"
            // bottom: `${customSin(index / (list.length - 1) / Math.PI)}%`
            // left: `${sin2PI((index / (list.length - 1)) * Math.PI)}%`
            // bottom: `calc(${scaledSin((index / (list.length - 1)) * Math.PI)}% + ${index % 3 === 0 ? -5 : index % 3 === 1 ? 0 : 5}%)`,
            // left: `calc(${(index / (list.length - 1)) * 80 + 10}% + ${index % 2 ? 5 : -5}%)`
          }}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FF4800]">
        <svg width="101" height="23" viewBox="0 0 101 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.0102 6.72407C12.925 5.86514 12.5594 5.19787 11.9134 4.72226C11.2674 4.24665 10.3908 4.00885 9.28338 4.00885C8.53092 4.00885 7.89559 4.11533 7.3774 4.32828C6.8592 4.53414 6.46167 4.82164 6.18483 5.19077C5.91508 5.55989 5.78021 5.97871 5.78021 6.44722C5.76601 6.83765 5.84764 7.17838 6.02511 7.46942C6.20967 7.76047 6.46167 8.01247 6.78111 8.22543C7.10055 8.43129 7.46968 8.6123 7.8885 8.76847C8.30731 8.91754 8.75453 9.04532 9.23014 9.1518L11.1894 9.6203C12.1406 9.83326 13.0137 10.1172 13.8087 10.4721C14.6038 10.8271 15.2924 11.2636 15.8744 11.7818C16.4565 12.3 16.9073 12.9105 17.2267 13.6133C17.5533 14.316 17.7201 15.1217 17.7272 16.0304C17.7201 17.3649 17.3793 18.522 16.705 19.5016C16.0377 20.4741 15.0723 21.2301 13.8087 21.7696C12.5523 22.302 11.0367 22.5682 9.26208 22.5682C7.50162 22.5682 5.96832 22.2984 4.66217 21.7589C3.36313 21.2194 2.34802 20.4209 1.61687 19.3632C0.892808 18.2984 0.513032 16.9816 0.477539 15.4128H4.93902C4.98871 16.1439 5.19812 16.7544 5.56725 17.2442C5.94347 17.7269 6.44393 18.0925 7.06861 18.341C7.70038 18.5823 8.41379 18.703 9.20884 18.703C9.98969 18.703 10.6676 18.5894 11.2426 18.3623C11.8247 18.1351 12.2754 17.8192 12.5949 17.4146C12.9143 17.01 13.074 16.545 13.074 16.0197C13.074 15.5299 12.9285 15.1182 12.6375 14.7845C12.3535 14.4509 11.9347 14.167 11.381 13.9327C10.8344 13.6985 10.1636 13.4855 9.36856 13.2938L6.99407 12.6976C5.15553 12.2503 3.70386 11.5511 2.63907 10.5999C1.57428 9.6487 1.04543 8.3674 1.05253 6.75601C1.04543 5.43567 1.39681 4.28214 2.10667 3.29544C2.82363 2.30873 3.80679 1.53853 5.05615 0.984835C6.3055 0.431143 7.72523 0.154297 9.31532 0.154297C10.9338 0.154297 12.3464 0.431143 13.5532 0.984835C14.7671 1.53853 15.7112 2.30873 16.3855 3.29544C17.0599 4.28214 17.4077 5.42502 17.429 6.72407H13.0102Z"
            fill="#FF4800"
          />
          <path
            d="M20.8284 22.2594V0.452439H25.4389V10.0675H25.7264L33.574 0.452439H39.1002L31.0078 10.2166L39.1961 22.2594H33.6804L27.707 13.2938L25.4389 16.0623V22.2594H20.8284Z"
            fill="#FF4800"
          />
          <path d="M46.1119 0.452439V22.2594H41.5013V0.452439H46.1119Z" fill="#FF4800" />
          <path d="M49.9052 22.2594V0.452439H54.5158V18.4581H63.8647V22.2594H49.9052Z" fill="#FF4800" />
          <path d="M66.9179 22.2594V0.452439H71.5285V18.4581H80.8774V22.2594H66.9179Z" fill="#FF4800" />
          <path
            d="M95.7605 6.72407C95.6753 5.86514 95.3098 5.19787 94.6638 4.72226C94.0178 4.24665 93.1411 4.00885 92.0337 4.00885C91.2813 4.00885 90.646 4.11533 90.1278 4.32828C89.6096 4.53414 89.212 4.82164 88.9352 5.19077C88.6654 5.55989 88.5306 5.97871 88.5306 6.44722C88.5164 6.83765 88.598 7.17838 88.7755 7.46942C88.96 7.76047 89.212 8.01247 89.5315 8.22543C89.8509 8.43129 90.22 8.6123 90.6389 8.76847C91.0577 8.91754 91.5049 9.04532 91.9805 9.1518L93.9397 9.6203C94.8909 9.83326 95.7641 10.1172 96.5591 10.4721C97.3542 10.8271 98.0427 11.2636 98.6248 11.7818C99.2069 12.3 99.6577 12.9105 99.9771 13.6133C100.304 14.316 100.47 15.1217 100.478 16.0304C100.47 17.3649 100.13 18.522 99.4553 19.5016C98.7881 20.4741 97.8227 21.2301 96.5591 21.7696C95.3027 22.302 93.7871 22.5682 92.0124 22.5682C90.252 22.5682 88.7187 22.2984 87.4125 21.7589C86.1135 21.2194 85.0984 20.4209 84.3672 19.3632C83.6432 18.2984 83.2634 16.9816 83.2279 15.4128H87.6894C87.7391 16.1439 87.9485 16.7544 88.3176 17.2442C88.6938 17.7269 89.1943 18.0925 89.819 18.341C90.4507 18.5823 91.1642 18.703 91.9592 18.703C92.7401 18.703 93.418 18.5894 93.993 18.3623C94.575 18.1351 95.0258 17.8192 95.3452 17.4146C95.6647 17.01 95.8244 16.545 95.8244 16.0197C95.8244 15.5299 95.6789 15.1182 95.3878 14.7845C95.1039 14.4509 94.6851 14.167 94.1314 13.9327C93.5848 13.6985 92.914 13.4855 92.1189 13.2938L89.7444 12.6976C87.9059 12.2503 86.4542 11.5511 85.3894 10.5999C84.3246 9.6487 83.7958 8.3674 83.8029 6.75601C83.7958 5.43567 84.1472 4.28214 84.857 3.29544C85.574 2.30873 86.5572 1.53853 87.8065 0.984835C89.0559 0.431143 90.4756 0.154297 92.0657 0.154297C93.6842 0.154297 95.0968 0.431143 96.3036 0.984835C97.5174 1.53853 98.4615 2.30873 99.1359 3.29544C99.8103 4.28214 100.158 5.42502 100.179 6.72407H95.7605Z"
            fill="#FF4800"
          />
        </svg>
      </div>
    </div>
  )
}

export default Skills
