import React from 'react'

function Article(props) {
  const { author, title, description, url, urlToImage } = props.info;
  console.log(props)
  return (
    <div>
      <h1>{title}</h1>
      <img src={urlToImage} alt="" />
      <h2>{author}</h2>
      <p>{description}</p>
      <a href={url}>Full Article</a>
    </div>
  )
}

export default Article
