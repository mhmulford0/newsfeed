import React from 'react'
import styled from 'styled-components'


const StyledArticle = styled.div`
  width: 30%;
  margin: 1rem;
  border: 1px solid black;
  padding: 1rem;
  img {
    width: 350px;
    margin: 0 0 0.5rem 0;
  }
  h1 {
    font-size: 2rem;
    margin: 0 0 1rem 0;
  }
  p {
    font-size: 0.9rem;
  }
  a {
    font-size: 1.1rem;
    color: black;
    text-decoration: none;

    &:hover {
      color: red;
    }
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
