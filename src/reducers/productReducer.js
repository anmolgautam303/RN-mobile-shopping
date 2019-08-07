import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from "../constants/productConstants";

let initialState = {
  loading: false,
  products: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      state = Object.assign({}, state, {
        loading: true
      });
      return state;
    case FETCH_PRODUCTS_SUCCESS:
      state = Object.assign({}, state, {
        loading: false,
        products: action.payload
      });
      return state;
    default:
      return state;
  }
};

export default productReducer;
