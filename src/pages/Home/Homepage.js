import React, { useState } from "react";
import Card from "../../components/card/Card";
import CardList from "../../components/card/CardList";
import SearchField from "../../components/searchField/SearchField";

function Homepage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryQuery, setCatgoryQuery] = useState();
  const [sourceQuery, setSourceQuery] = useState();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const handleDateSelection = (dateType) => {
    const today = new Date();
    switch (dateType) {
      case "Today":
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() - 1); // Get tomorrow's date
        setFromDate(today.toISOString().split("T")[0]);
        setToDate(tomorrow.toISOString().split("T")[0]);
        setQuery("");
        break;
      case "This Week":
        const lastWeek = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - today.getDay() - 6
        );
        setFromDate(lastWeek.toISOString().split("T")[0]);
        setToDate(today.toISOString().split("T")[0]);
        setQuery("");
        break;
      case "This Month":
        const firstDayOfMonth = new Date(
          today.getFullYear(),
          today.getMonth(),
          1
        );
        setFromDate(firstDayOfMonth.toISOString().split("T")[0]);
        setToDate(today.toISOString().split("T")[0]);
        setQuery("");
        break;
      default:
        break;
    }
    // Here you can use 'from' and 'to' to perform your search or any other operation
  };
  return (
    <div className="container max-w-[1180px] mx-auto">
      {/* <Card /> */}
      <div className="mt-10">
        <SearchField
          onSearch={handleSearch}
          setCatgoryQuery={setCatgoryQuery}
          setSourceQuery={setSourceQuery}
          handleDateSelection={handleDateSelection}
          setFromDate={setFromDate}
          setToDate={setToDate}
          query={query}
          setQuery={setQuery}
        />
        <CardList
          searchQuery={searchQuery}
          categoryQuery={categoryQuery}
          sourceQuery={sourceQuery}
          fromDate={fromDate}
          toDate={toDate}
        />
      </div>
    </div>
  );
}

export default Homepage;
