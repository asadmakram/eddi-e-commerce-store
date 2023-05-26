import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  if (!id) return;
  let { data: product } = await axios.get(`/api/products/${id}`);

  let { name, image, price, countInStock } = product;

  dispatch({
    type: CART_ADD_ITEM,
    payload: { product: id, name, image, price, countInStock, qty },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {

  dispatch({ type: CART_REMOVE_ITEM, payload: id });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
