import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer, productDetailsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

const combinedReducers = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer
};
let cartItemFromStorage = localStorage.getItem("cartItems");

cartItemFromStorage = cartItemFromStorage ? JSON.parse(cartItemFromStorage) : [];
const initialState = {

  cart: {cartItems : cartItemFromStorage}
};

const middlewares = [thunk];

const store = createStore(
  combineReducers(combinedReducers),
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
