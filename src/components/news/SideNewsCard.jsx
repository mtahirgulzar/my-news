import React from "react";

export default function SideNewsCard({ news, title }) {
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <a
      href={news.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:no-underline"
    >
      <div className="w-full flex flex-row gap-4 pb-4  ">
        <img
          src={news?.urlToImage || "/images/news-card.png"}
          alt="img"
          className=" h-[150px] w-[126.5px] md:h-[203px] md:w-[226.5px] lg:h-[131px] lg:w-[296px] object-cover"
        />

        <div className=" w-[50%] md:my-auto my-0">
          <div className="pt-3 pb-[9px] pr-6">
            <div className=" bg-[#45485F]  inline-block min-w-min cursor-pointer">
              <p className=" text-[#FFFFFF] font-sans font-lato text-base leading-normal font-normal px-1 py-1/2  hover:text-black ">
                {title}
              </p>
            </div>
            <div className="mt-[2px] mb-[8px]">
              <h1 className="mt-[2px] mb-[8px]   text-gray-900 font-serif font-lora text-base font-bold">
                {news?.title && news.title.split(" ").slice(0, 9).join(" ")}
              </h1>
              <p className="text-gray-600 font-sans font-lato text-xs font-normal">
                {formatDate(news.publishedAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
