import React, { useEffect, useState } from "react";
import "./Content.css";
import { db } from "../../lib/firebaseApi";
import { doc, getDoc, setDoc } from "firebase/firestore/lite";

function Content(props) {
  const { foodItem, setSelectedFoodItem, selectedFoodItem } = props;

const[firebaseDataState,setFirebaseDataState]=useState({});

  useEffect(()=>{

    const buttonCollectionRef = doc(db, "FoodItemDetails", "myItems" );

    getDoc(buttonCollectionRef)
    .then(response => {
      console.log("Success");
      const btns = response.data()
      
      setFirebaseDataState(btns);
      
    })
    .catch(error=> console.log(error.message));

  },[])

  console.log("firebaseDataState", firebaseDataState)

  const AddingItems = (item) => {
    setSelectedFoodItem([...selectedFoodItem, item]);
   const selectedItemFirebase ={
        data : [...selectedFoodItem, item]
    }
    const addButtonCollectionRef = doc(db, "FoodItemDetails", "selectedFoodItem" );
       setDoc(addButtonCollectionRef, selectedItemFirebase)
       .then(response=>console.log("success"))
       .catch(error=> console.log(error.message));
  };
  return (
    <div className="rootContainer">
      <h1 className="quote">Good Food for Good Moments</h1>
      <div className="flexbox">
        {foodItem?.data?.map((item) => {
          return (
            <div className="card">
              <img src={item.image} alt="" className="card-img" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <h4>{item.price}</h4>
              <button onClick={() => AddingItems(item)} className="addButton">
                +Add
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
