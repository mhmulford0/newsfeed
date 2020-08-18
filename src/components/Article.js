import React from 'react'
import styled from 'styled-components'


const StyledArticle = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 30%;
  img {
    width: 350px;
  }
  h1 {
    font-size: 2.2rem;
  }
`;

function Article(props) {
  const { author, title, description, url, urlToImage } = props.info;
  console.log(props)
  return (
    <StyledArticle>
      <h1>{title}</h1>
      <img src={urlToImage} alt="" />
      <h2>{author}</h2>
      <p>{description}</p>
      <a href={url}>Full Article</a>
    </StyledArticle>
  )
}

export default Article
