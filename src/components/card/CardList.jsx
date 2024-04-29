import React, { useEffect, useState } from "react";
import Card from "./Card";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
export default function CardList({ searchQuery, categoryQuery ,sourceQuery,fromDate,toDate  }) {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      let newsAPIKey = process.env.REACT_APP_API_KEY;
      let apiUrl;
    
      if (fromDate && toDate ) {
        apiUrl = `https://news-nextjs-apis.vercel.app/api/time-news?fromDate=${fromDate}&toDate=${toDate}&sortBy=popularity&apiKey=${newsAPIKey}`;
      } else if (searchQuery) {
         apiUrl = `https://news-nextjs-apis.vercel.app/api/search-news?q=${searchQuery}&apiKey=${newsAPIKey}`;
      } else if(sourceQuery){
        apiUrl = `https://news-nextjs-apis.vercel.app/api/source-news?sources=${sourceQuery}&apiKey=${newsAPIKey}`;
      } else {
        apiUrl = `https://news-nextjs-apis.vercel.app/api/top-news?apiKey=${newsAPIKey}`;
      }
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();
        if(data?.articles){
          setNews(data.articles);
        }else if(data?.sources){
          setNews(data?.sources);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchNews();
  }, [searchQuery,categoryQuery,sourceQuery,fromDate]);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader
            color={"#36D7B7"}
            loading={loading}
            css={override}
            size={150}
          />
        </div>
      ) : (
        <>
          {!news || news.length == 0 ? (
            <div>
              <h2>Sorry, No Results Found</h2>
            </div>
          ) : (
            <Card news={news} />
          )}
        </>
      )}
    </>
  );
}
