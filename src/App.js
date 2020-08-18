import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';

import Article from './components/Article'

import theme from './Theme'



function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us',
      {
        headers: {
          'X-Api-Key': process.env.REACT_APP_API_KEY,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
        }
      }

    ).then(res => {
      setArticles(res.data.articles)
    })
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Headlines of the Day</h1>
        {articles.map(article => {
          return <Article key={article.title} info={article} />
        })}
      </div>
    </ThemeProvider>
  );
}

export default App;
