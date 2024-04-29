import React, { useEffect, useState } from "react";
import SideNewsCard from "../../components/news/SideNewsCard";
import MainNewsCard from "../../components/news/MainNewsCard";
import Card from "../../components/stockMarket/Card";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

function Sports({ newsData }) {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  
  useEffect(() => {
    const fetchNews = async () => {
      let newsAPIKey = process.env.REACT_APP_API_KEY;
      let searchQuery= "sports"
      let apiUrl;
      // Fetch general top headlines
      apiUrl = `https://news-nextjs-apis.vercel.app/api/search-news?q=${searchQuery}&apiKey=${newsAPIKey}`;

      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data?.articles) {
          setNews(data.articles);
        } else if (data?.sources) {
          setNews(data?.sources);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when request completes
      }
    };

    fetchNews();
  }, []);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
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
        <div className="px-6 my-6 max-w-[1280px] mx-auto ">
          <div className=" flex flex-col md:flex-row gap-4 bg-[#F7F7F8]">
            { news &&
            <MainNewsCard news={news[0]} title="Sports" />

            }
            <div>
              {news &&
                news
                  .slice(4, 7)
                  .map((item, index) => (
                    <SideNewsCard title="Sports" key={index} news={item} />
                  ))}
            </div>
          </div>
          <div className="lg:mt-12 mt-28">
            <h3 className="mb-3 text-4xl font-semibold">Sports</h3>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {news.slice(1, showMore ? news.length : 7).map((item, index) => (
                <Card key={index} news={item} title="Sports" />
              ))}
            </div>
            {news.length > 6 && (
              <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleShowMore}>
                {showMore ? "Show Less" : "Show More"}
              </button>
            )}
            </div>
          </div>
      )}
    </>
  );
}

export async function getServerSideProps() {
  try {
    const newsAPIKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPIKey}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch news data");
    }

    const newsData = await response.json();

    return {
      props: {
        newsData,
      },
    };
  } catch (error) {
    console.error("Error fetching news data:", error);
    return {
      props: {
        newsData: null, // Return null or an empty object in case of error
      },
    };
  }
}

export default Sports;
