import React from 'react'
import styled from 'styled-components'


const StyledArticle = styled.div`
  width: 28%;
  min-height:45vh;
  margin: 1rem;
  background-color: #FFFAF1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: box-shadow 0.2s ease-in;
  &:hover {
    transition: box-shadow 0.2s ease-out;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  img {
    width: 100%;
    height: 38%;
    border-radius: 15px 15px 0 0;
  }
  h1 {
    font-size: 1.3rem;
    margin: 0 0 1rem 0;
    text-align: left;
    font-weight: 500;
  }
  h2 {
    font-size: 1rem;
    font-style: italic;
    font-weight: 400; 
  }
  p {
    font-size: 0.9rem;
    margin: 1rem 0;
  }
  a {
    font-size: 1.1rem;
    color: black;
    text-decoration: none;


    &:hover {
      color: red;
    }
  }

  .cardBtm{
    width: 100%;
    padding: 0.8rem;
  }
`;

function Article(props) {
  const { author, title, description, url, urlToImage } = props.info;
  return (
    <StyledArticle>
      <img src={urlToImage} alt="" />
      <div className="cardBtm">
        <h1>{title}</h1>
        <h2>By: {author}</h2>
        <p>{description}</p>
        <a href={url}>Full Article</a>
      </div>
    </StyledArticle>
  )
}

export default Article
