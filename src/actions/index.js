import Products from "./products.json";
import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from '../constants/productConstants';

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: FETCH_PRODUCTS });

    setTimeout(() => {
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: Products.data });
    }, 2000);
  };
};
