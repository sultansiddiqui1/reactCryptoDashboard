import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const NewsFeed = () => {

  const [articles, setArticles] = useState(null);

  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY 
      }
    };

    axios.request(options).then((response) => {
      console.log(response.data);
      setArticles(response.data);
    }).catch((error) => {
      console.error(error);
    });
  })

console.log(articles);

const first7=articles?.slice(0,8)
  return (
    <div className="news-feed">
      <h2> News Feed</h2>
      {first7?.map(article=>(
     <a href={article.url}> <p>{article.title}</p></a>
     ))}

    </div>
  );
}

export default NewsFeed;
