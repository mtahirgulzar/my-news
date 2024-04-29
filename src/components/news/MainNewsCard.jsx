import React from "react";

export default function MainNewsCard({ news, title }) {
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <div
      className="bg-cover flex flex-col justify-end p-6 pt-[96px] relative "
      style={{
        backgroundImage: `url(${news?.urlToImage || "/images/news-card.png"})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-500"></div>

      <div className="pr-0 md:pr-[40px] pt-6 pb:0 md:pb-6 z-10">
        <div className=" bg-[#45485F]  inline-block min-w-min cursor-pointer">
          <p className=" text-[#FFFFFF] font-sans font-lato text-base leading-normal font-normal px-1 py-1/2  hover:text-black ">
            {title}
          </p>
        </div>
        <h1 className="mt-[2px] mb-[8px] text-white font-serif font-lora text-[18px] md:text-[28px] leading:28px md:leading-[40px] font-bold">
          {news?.title && news.title.split(" ").slice(0, 8).join(" ")}
        </h1>
        <p className="text-white font-sans font-lato text-xs font-normal">
          {/* <span>akbarh{"  "}</span> <span>June 28, 2021</span> */}
          <div className="flex justify-between">
            <p className=" text-sm">
            {formatDate(news.publishedAt)}
            </p>
            <p className=" text-sm">
              {news.author && news.author.split(" ").slice(0, 2).join(" ")}
            </p>
            {!news.author && (
              <p
                className={` text-sm ${
                  news.author ? "hidden" : "block"
                }`}
              >
                {!news.author && news?.source?.name
                  ? news?.source?.name
                  : "Author"}
              </p>
            )}
          </div>
        </p>
      </div>
    </div>
  );
}
