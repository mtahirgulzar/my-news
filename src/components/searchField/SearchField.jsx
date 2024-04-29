import React, { useState, useRef, useEffect } from "react";

export default function SearchField({
  onSearch,
  setCatgoryQuery,
  setSourceQuery,
  handleDateSelection,
  setFromDate,
  setToDate,
  query,
  setQuery,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    onSearch(category);
    setQuery("");
    setFromDate("");
    setToDate("");
    toggleDropdown(); // close dropdown after selection if needed
  };
  const handleSourceSelection = (source, soucelink) => {
    setSelectedCategory(source);
    setSourceQuery(soucelink);
    onSearch("");
    setQuery("");
    setFromDate("");
    setToDate("");
    toggleDropdown(); // close dropdown after selection if needed
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedCategory("All categories");
    setFromDate("");
    setToDate("");
    onSearch(query);
  };
  const categories = [
    { name: "Science", link: "science" },
    { name: "Business", link: "business" },
    { name: "Sports", link: "sports" },
    { name: "Technology", link: "technology" },
    { name: "Entertainment", link: "entertainment" },
  ];
  const sourcesData = [
    { name: "BBC News", link: "bbc-news" },
    { name: "CNN", link: "cnn" },
    { name: "Al Jazeera", link: "al-jazeera-english" },
    { name: "The Washington Post", link: "the-washington-post" },
    { name: "Reuters", link: "reuters" },
  ];

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto md:px-0 px-3 ">
        <div className="flex relative">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0  gap-3 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
            onClick={toggleDropdown}
          >
            {selectedCategory}
            <svg
              className={`w-2.5 h-2.5 ${isOpen ? "transform rotate-180" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            ref={dropdownRef}
            className={`z-10 ${
              isOpen ? "block" : "hidden"
            } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-1 top-[100%] w-full`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <div className="font-medium text-gray-900 dark:text-gray-300 ms-2 text-sm">
                Date
              </div>
              <div className="flex">
                <li>
                  <button
                    type="button"
                    className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 ${
                      selectedCategory === "Today" ? "bg-gray-100" : ""
                    }`}
                    onClick={() => {
                      handleDateSelection("Today");
                      setSelectedCategory("Today");
                      toggleDropdown();
                    }}
                  >
                    Today
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 ${
                      selectedCategory === "This Week" ? "bg-gray-100" : ""
                    } `}
                    onClick={() => {
                      handleDateSelection("This Week");
                      setSelectedCategory("This Week");
                      toggleDropdown();
                    }}
                  >
                    This Week
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 ${
                      selectedCategory === "This Month" ? "bg-gray-100 " : ""
                    }`}
                    onClick={() => {
                      handleDateSelection("This Month");
                      setSelectedCategory("This Month");
                      toggleDropdown();
                    }}
                  >
                    This Month
                  </button>
                </li>
              </div>
              {/* <li>
                <div className="font-medium text-gray-900 dark:text-gray-300 ms-2 text-sm">
                  Category
                </div>
                <ul
                  className="py-2 flex text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          selectedCategory === category.name
                            ? "bg-gray-100"
                            : ""
                        }`}
                        onClick={() => handleCategorySelection(category.name)}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li> */}
              <li>
                <div className="font-medium text-gray-900 dark:text-gray-300 ms-2 text-sm">
                  Source
                </div>
                <ul
                  className="py-2 flex text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  {sourcesData.map((source, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ${
                          selectedCategory == source.name ? "bg-gray-100" : ""
                        } `}
                        onClick={() =>
                          handleSourceSelection(source.name, source.link)
                        }
                      >
                        {source.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          {/*                         Select box end             */}
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 dark:text-white "
              placeholder="Search for Articles by keyword ..."
              required
              value={query}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
