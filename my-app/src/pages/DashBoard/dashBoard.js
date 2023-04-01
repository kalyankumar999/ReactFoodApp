import React, { useEffect, useState } from "react";
import Content from "../../Component/Content";
import Header from '../../Component/Header'

import "./dashBoard.css";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../../lib/firebaseApi";


function DashBoard(props) {



  const [foodItem,setFoodItem]=useState({})
  const [selectedFoodItem,setSelectedFoodItem]=useState([])
console.log("selectedFoodItemMain", selectedFoodItem)



  useEffect(()=>{

    const buttonCollectionRef = doc(db, "FoodItemDetails", "myItems" );

    getDoc(buttonCollectionRef)
    .then(response => {
      console.log("Success");
      const btns = response.data()
      
      setFoodItem(btns);
      
    })
    .catch(error=> console.log(error.message));

    const buttonCollectionRefSelectedItem = doc(db, "FoodItemDetails", "selectedFoodItem" );

    getDoc(buttonCollectionRefSelectedItem)
    .then(response => {
      console.log("Success");
      const btns = response.data()
      
      setSelectedFoodItem(btns?.data);
      console.log("firebaseSelected",btns?.data)
    })
    .catch(error=> console.log(error.message));

  },[])

  return (
    <>
       <Header 
       setFoodItem={setFoodItem} 
       selectedFoodItem={selectedFoodItem} 
       isDashBoard={true}
       setSelectedFoodItem={setSelectedFoodItem} 
       />
      <Content 
      setSelectedFoodItem={setSelectedFoodItem} 
      foodItem={foodItem} 
      selectedFoodItem={selectedFoodItem}
      />
    </>
  );
}

export default DashBoard;
