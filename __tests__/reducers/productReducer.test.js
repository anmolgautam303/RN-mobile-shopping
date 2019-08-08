import ProductReducer from '../../src/reducers/productReducer';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  REMOVE_PRODUCT
} from '../../src/constants/productConstants';

describe('ProductReducer', () => {
  it('set loading to true', () => {
    let state = {
      loading: false
    };

    state = ProductReducer(state, { type: FETCH_PRODUCTS });
    expect(state.loading).toEqual(true);
  });

  it('fetch products and sets them in the store', () => {
    const payload = [
      {
        name: 'Sledgehammer',
        price: 125.75
      }
    ];
    let state = {
      loading: true,
      products: []
    };
    const result = { loading: false, products: payload };

    state = ProductReducer(state, { type: FETCH_PRODUCTS_SUCCESS, payload });
    expect(state).toEqual(result);
  });

  it('removes a product from productsInCart array', () => {
    const payload = {
      name: 'Sledgehammer',
      price: 125.75
    };
    let state = {
      productsInCart: [payload]
    };
    const result = { productsInCart: [] };

    state = ProductReducer(state, { type: REMOVE_PRODUCT, payload });
    expect(state).toEqual(result);
  });

  it('add a new product to productsInCart array', () => {
    const payload = {
      name: 'Sledgehammer',
      price: 125.75,
      quantity: 1
    };
    let state = {
      productsInCart: []
    };
    const result = { productsInCart: [payload] };

    state = ProductReducer(state, { type: ADD_PRODUCT, payload });
    expect(state).toEqual(result);
  });

  it('increases the quantity of an already added product in productsInCart array', () => {
    const payload = {
      name: 'Sledgehammer',
      price: 125.75,
      quantity: 1
    };
    let state = {
      productsInCart: [payload]
    };
    const result = { productsInCart: [{ ...payload, quantity: 2 }] };

    state = ProductReducer(state, { type: ADD_PRODUCT, payload });
    expect(state).toEqual(result);
  });
});
