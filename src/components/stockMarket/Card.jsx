import React from "react";

export default function Card({news,title}) {
  return (
    <a href={news?.url} target="_blank">
      <div className="w-[100%] md:w-[388px] hover:shadow-lg transition-all duration-200   pb-[40px] md:pb-[63px] border border-b-[#22242F] md:border-b-0 shadow-sm flex flex-col">
      <div className="max-h-[258px]  w-[100%] mb-[21px] ">
        <img
          src={news?.urlToImage || "/images/news-card.png"}
          alt="img"
          className="h-[100%] w-[100%] max-h-[220px] min-h-[220px]  mb-[21px]  object-cover"
        />
      </div>

      <div className=" mb-[30px]   md:p-3 p-2">
        <div className="cursor-pointer pb-[11px]">
          <p className="font-lato text-sm font-[13px] leading-normal tracking-normal text-blue-500  hover:text-black ">
            {title}
          </p>
        </div>
        <div className="">
          <p className="text-[#45485F] font-sans font-lato text-xs font-normal mb-[4px]">
            <span>akbarh{"  "}</span> <span>June 28, 2021</span>
          </p>
          <h1 className="mt-[2px] mb-1   text-[#22242F] font-serif font-lora text-2xl font-bold">
            What Your Relationship With Stock Market Says About You
          </h1>

          <p class="text-gray-700 bg-transparent font-lato text-base font-normal leading-normal tracking-normal">
            Cursus iaculis etiam in In nullam donec sem sed consequat
            scelerisque nibh amet, massa egestas risus, gravida vel amet,
            imperdiet …
          </p>
        </div>
      </div>
    </div>
    </a>
  );
}
