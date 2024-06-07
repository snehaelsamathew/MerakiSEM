import React, { createContext, useEffect, useState } from "react";
import { Digital_list, Digital_lists, Moments_list, Moments_lists, Painting_list,
   Painting_lists, Stencil_list, Stencil_lists, sketch_list } from "../assets/assets";
import axios from 'axios';


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  //define one variable
  const url ="http://localhost:4000"
  //create one state variable

  const [token,setToken] = useState("");

  // 1) by entering this , the images are gone from crafts page. that images should come from db
  const [sketch_lists, setSketchList] = useState([])
  

  const addToCart = async (itemId) => {
    console.log("Adding to cart:", itemId);
    setCartItems((prev) => {
      console.log("Previous cart items:", prev);
      if (!prev) {
        return { [itemId]: 1 };
      }
  
      return {
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      };
    });
    {/*if we have a token available, whatever items added in the cart we will update in db also */}
    if (token) {
      try {
        await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
      } catch (error) {
        console.error("Error adding to cart", error);
      }
    }
  };
    //when we logged in, we will have the token. in that case, when we will add the pdct in cart,
    // pdct will be added in the db cart also
  




  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedItems = { ...prev };
      if (updatedItems[itemId] > 1) {
        updatedItems[itemId] -= 1;
      } else {
        delete updatedItems[itemId];
      }
      return updatedItems;
    });
    if (token) {
      await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
    }
  };

   {/* const removeFromCart = async (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if(token){   //if we have token it means user is loggedin 
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  };
*/}
  const decrementQuantity = (itemId) => {
    setCartItems((prev) => {
      const updatedItems = { ...prev };
      if (updatedItems[itemId] > 1) {
        updatedItems[itemId] -= 1;
      } else {
        delete updatedItems[itemId];
      }
      return updatedItems;
    });
  };

 {/*const getTotalCartAmount = () => {
    let totalAmount = 0;
    
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = sketch_lists.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };
*/}
  const getTotalCartAmounts = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = sketch_lists.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

// 2) 

const fetchSketchList = async () =>{
  const response = await axios.get(url+"/api/sketch/list")
  setSketchList(response.data.data)
}

const loadCartData = async (token) => {
  const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
  setCartItems(response.data.cartData);

}

//when we loggedin and when reload the page , dont logout at that time. 
 useEffect(()=>{
  
  async function loadData(){
    await fetchSketchList()
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      await loadCartData(savedToken);
    }
  }
  loadData();
}, []);


  const contextValue = {
    sketch_list,
    sketch_lists,
    cartItems,
  Moments_list,
  Moments_lists,
  Digital_list,
  Digital_lists,
  Stencil_list,
  Stencil_lists,
  Painting_list,
  Painting_lists,
    addToCart,
    removeFromCart,
    decrementQuantity,
   
    getTotalCartAmounts,
    url,
    token,
    setToken
    
   
   
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
