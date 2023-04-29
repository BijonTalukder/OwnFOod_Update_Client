import { FeaturedVideo } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
const items =
  localStorage.getItem("cartList") !== null
    ? JSON.parse(localStorage.getItem("cartList"))
    : [];
const User = JSON.parse(localStorage.getItem("UserDetails"));
export const CartSlice = createSlice({
  name: "cart",

  initialState: items,
  reducers: {
    setCartList: (state, action) => {
      console.log("state");
      state.allCartList = action.payload;
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item._id === newItem._id);

      if (existingItem) {
        existingItem.foodQty++;
      } else {
        state.push({ ...newItem, foodQty: 1 });
        // if (User) {
        //   console.log("from user");
        //   fetch("http://localhost:5000/api/v1/create-cart-items", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ status: true }),
        //   })
        //     .then((res) => res.json())
        //     .then((data) => console.log(data));
        // }
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      console.log(itemId);
      console.log(itemId);
      return state.filter((item) => item._id !== itemId);
    },
    decreaseItem: (state, action) => {
      const itemId = action.payload._id;
      console.log(itemId._id);
      const existingItem = state.find((item) => item._id === itemId);
      if (existingItem) {
        if (existingItem.foodQty > 1) {
          console.log(existingItem);
          existingItem.foodQty--;
        } else {
          return state.filter((item) => item._id !== itemId);
        }
      }
    },
  },
});
export const { addItem, setCartList, removeItem, decreaseItem } =
  CartSlice.actions;
export default CartSlice.reducer;
