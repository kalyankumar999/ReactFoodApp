import React, { useState } from "react";
import "./Header.css";
import { CartIcon } from "../../Assets/Images";
import Search from "../../Elements/Search";
import { useNavigate } from "react-router-dom";
import Order from "../../pages/Order";
import { doc, setDoc } from "firebase/firestore/lite";
import { db } from "../../lib/firebaseApi";

function Header(props) {
  const { setFoodItem, selectedFoodItem, isDashBoard, setSelectedFoodItem} = props;

  const [showCart, setShowCart] = useState(false);

  const OpenCart = () => {
    setShowCart(!showCart);
  };
  let totalPrice = 0;

  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/order");
  };

  const handleRemove = (index)=>{
  
    const selectedFoodItemCopy = selectedFoodItem;
    selectedFoodItemCopy?.splice(index,1)    
    setSelectedFoodItem([...selectedFoodItemCopy]) 
    const selectedItemFirebase ={
      data : [...selectedFoodItemCopy]
  }
  const addButtonCollectionRef = doc(db, "FoodItemDetails", "selectedFoodItem" );
     setDoc(addButtonCollectionRef, selectedItemFirebase)
     .then(response=>console.log("success"))
     .catch(error=> console.log(error.message));   
  }

  console.log("selectedFoodItemHeader", selectedFoodItem)
  return (
    <div>
      <div className="header">
        <div className="textSearchContainer">
          <div className="food">Food <br/>Ordering App</div>

          {isDashBoard && (
            <div>
              <Search setFoodItem={setFoodItem} />
            </div>
          )}
        </div>

        {isDashBoard && showCart && selectedFoodItem?.length > 0 && (
          <div className="cartSide">
            <div>
              <div className="card1">
                {selectedFoodItem &&
                  selectedFoodItem.length > 0 &&
                  selectedFoodItem.map((objData, index) => {
                    
                    return (
                      <div className="cartItem">
                        <img src={objData?.image} alt="" className="cardimg" />
                        <h3>{objData?.title}</h3>
                        <h4>Price : {objData?.price}</h4>
                        <p>{objData?.description}</p>
                        <button 
                        onClick={()=>handleRemove(index)}
                        >remove</button>
                      </div>
                    );
                  })}
              </div>
              <h4 className="totalcost">
                Total Price : $
                {selectedFoodItem.map((item, index) => {
                  const itemPrice = item?.price?.substring(
                    0,
                    item?.price?.length - 1
                  );
                  totalPrice = parseInt(totalPrice) + parseInt(itemPrice);
                  if (selectedFoodItem.length - 1 === index) {
                    return totalPrice;
                  }
                })}
                <button className="pay" onClick={handleOrder}>
                  ORDER
                </button>
              </h4>
            </div>
          </div>
        )}

        {isDashBoard && (
          <div className="shoppingCart">
            <div className="cartCount">
              <div className="count">{selectedFoodItem?.length}</div>
            </div>
            <button className="cartButton" onClick={OpenCart}>
              <img className="CartImage" src={CartIcon} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
