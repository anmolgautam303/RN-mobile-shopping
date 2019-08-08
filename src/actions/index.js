import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  REMOVE_PRODUCT
} from "../constants/productConstants";
import Products from "./products.json";

export const fetchProducts = () => dispatch => {
  dispatch({ type: FETCH_PRODUCTS });

  setTimeout(() => {
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: Products.data });
  }, 2000);
};

export const addToCart = payload => {
  return {
    type: ADD_PRODUCT,
    payload
  };
};

export const removeFromCart = payload => {
  return {
    type: REMOVE_PRODUCT,
    payload
  };
};
