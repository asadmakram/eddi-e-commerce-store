import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer, productDetailsReducer } from "./reducers/productReducer";

const combinedReducers = {
  productList: productListReducer,
  productDetails: productDetailsReducer
};

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  combineReducers(combinedReducers),
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
