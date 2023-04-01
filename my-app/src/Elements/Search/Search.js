import React, { useState } from "react";
import foodItemList from "../../MockData/foodItemData";
import "./Search.css";
import { SearchIcon } from "../../Assets/Images";

function Search(props) {
  const { setFoodItem } = props;

  const SearchHandler = (event) => {
    const searchValue = event.target.value;
    let filteredValue = foodItemList.filter((data) => {
      return data.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    setFoodItem(filteredValue);
  };
  return (
    <div>
      <div className="inputdiv">
        <input
          className="search"
          type={Text}
          placeholder="search"
          onChange={SearchHandler}
        />
        <img src={SearchIcon} className="searchIcon" />
      </div>
    </div>
  );
}

export default Search;
