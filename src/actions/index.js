import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from '../constants/productConstants';
import Products from "./products.json";

export const fetchProducts = () => {
  return dispatch => {
    dispatch({ type: FETCH_PRODUCTS });

    console.log('Products', Products);

    setTimeout(() => {
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: Products.data });
    }, 2000);
  };
};
