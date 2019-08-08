import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  ADD_PRODUCT, REMOVE_PRODUCT,
} from '../constants/productConstants';
import store from '../store';

let initialState = {
  loading: false,
  products: [],
  productsInCart: [],
  addingProductsToCart: false
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      };
    case ADD_PRODUCT: {
      let updatedPayload;
      const productsInCart = state.productsInCart;
      const index = productsInCart.findIndex(({ name }) => action.payload.name === name);

      if (index === -1) {
        updatedPayload = [...productsInCart, { ...action.payload, quantity: 1 }];
      } else {
        updatedPayload = productsInCart;
        productsInCart[index].quantity++;
      }

      return {
        ...state,
        productsInCart: updatedPayload
      };
    }
    case REMOVE_PRODUCT: {
      const updatedPayload = state.productsInCart.filter(item => item.name !== action.payload.name);
      return {
        ...state,
        productsInCart: updatedPayload
      };
    }
    default:
      return state;
  }
};

export default productReducer;
