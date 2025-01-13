"use client"

const Button = () => {
  const handleClick = async () => {
    const file = new File(
      [JSON.stringify({list: [{title: "hello world", content: "this is content", thumbnail: "/images/abc.png", is_published: true}]})],
      `index.json`,
      {
        type: "text/markdown"
      }
    )

    // const a = await putPosts(file)
    // console.log(a)
  }

  return <button onClick={handleClick}>Button</button>
}

export default Button
