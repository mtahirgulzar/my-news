import React from "react";

export default function Card({ news }) {
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <>
      <div class="container my-14 mx-auto md:px-6">
        <section class="mb-32 text-center mt-6">
          <div>
            <h2 class="mb-12 text-center text-3xl font-bold">
              Latest articles
            </h2>
          </div>

          <div class="grid gap-6 md:grid-cols-2 grid-cols-1  lg:grid-cols-3 xl:gap-x-12">
            {news?.map((item, idx) => {
              if (item.urlToImage !== null) {
                return (
                  <div
                    key={idx}
                    class="mb-6 mx-3 md:mx-0  lg:mb-0 shadow-md hover:shadow-lg transition-all duration-150 rounded-md"
                  >
                    <a href={item?.url} target="_blank">
                    <div
                      class="relative mb-6 overflow-hidden rounded-t-md bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img
                        src={item?.urlToImage || "/images/news-card.png"}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/news-card.png";
                        }}
                        class="w-full max-h-[250px] min-h-[250px] object-cover"
                        alt="News Image"
                      />
                      
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </div>
                    </a>
                    <div className="p-2">
                      <h5 class="mb-3 text-left text-[20px] leading-6 font-bold text-[rgb(34_36_47)]">
                        {item?.title &&
                          item.title.split(" ").slice(0, 8).join(" ")}
                      </h5>
                
                      <div className="flex justify-between mb-2">
                        <p className="text-neutral-500 text-sm">
                          {formatDate(item?.publishedAt)}
                        </p>
                        <p className="text-neutral-500 text-sm">
                          {item.author &&
                            item.author.split(" ").slice(0, 2).join(" ")}
                        </p>
                        {!item.author && (
                          <p className={`text-neutral-600 text-sm ${item.author ? "hidden" : "block"}`}>
                            {!item.author && item?.source?.name ? item?.source?.name  : "Author"}
                          </p>
                        )}
                      </div>
                      <p class="text-neutral-500 text-left dark:text-neutral-300">
                        {/* {item.description} */}
                        {item?.description &&
                          item.description.split(" ").slice(0, 20).join(" ") +
                            " . . ."}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </section>
      </div>
    </>
  );
}
