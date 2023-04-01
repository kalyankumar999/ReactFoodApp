import React, { useEffect, useState } from "react";

import "./Search.css";
import { SearchIcon } from "../../Assets/Images";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../../lib/firebaseApi";

function Search(props) {
  const { setFoodItem } = props;

  const[foodItemList, setFoodItemList]=useState([]);
  useEffect(()=>{
    const buttonCollectionRef = doc(db, "FoodItemDetails", "myItems" );

    getDoc(buttonCollectionRef)
    .then(response => {
      console.log("Success");
      const btns = response.data()
      
      setFoodItemList(btns);
      
    })
    .catch(error=> console.log(error.message));
  },[])

  const SearchHandler = (event) => {
    const searchValue = event.target.value;
    let filteredValue = foodItemList?.data?.filter((data) => {
      return data.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    setFoodItem({data : filteredValue});
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
