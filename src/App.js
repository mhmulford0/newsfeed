import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './components/Article'




function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us',
      {
        headers: {
          'X-Api-Key': process.env.REACT_APP_API_KEY
        }
      }

    ).then(res => {
      setArticles(res.data.articles)
    })
  }, [])
  return (
    <div className="App">
      {articles.map(article => {

        return <Article key={article.title} info={article} />
      })}
    </div>
  );
}

export default App;
