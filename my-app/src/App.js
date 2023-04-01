import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { useEffect } from "react";
import foodItemList from "./MockData/foodItemData";
import { doc, setDoc } from "firebase/firestore/lite";
import { db } from "./lib/firebaseApi";

function App() {

//   const data = {
//     data : foodItemList
//   }
// useEffect(()=>{
//   const addButtonCollectionRef = doc(db, "FoodItemDetails", "myItems" );
//   setDoc(addButtonCollectionRef, data)
//   .then(response=>console.log("success"))
//   .catch(error=> console.log(error.message));
// },[])
  
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
