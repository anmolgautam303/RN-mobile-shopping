import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  REMOVE_PRODUCT
} from '../../src/constants/productConstants';
import * as actions from '../../src/actions/productAction';
import Products from '../../src/actions/products';

it('creates an action to fetch products from a json file', (done) => {
  const dispatch = jest.fn();
  const expectedAction1 = [{ type: FETCH_PRODUCTS }];
  const expectedAction2 = [
    [{ type: FETCH_PRODUCTS }],
    [{ type: FETCH_PRODUCTS_SUCCESS, payload: Products.data }]
  ];

  actions.fetchProducts()(dispatch);

  expect(dispatch.mock.calls.length).toBe(1);
  expect(dispatch.mock.calls[0]).toEqual(expectedAction1);

  setTimeout(() => {
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls).toEqual(expectedAction2);
    done();
  }, 2000);
});

it('creates an action to add a product to a cart', () => {
  const payload = {
    'name': 'Sledgehammer',
    'price': 125.75
  };

  const expectedAction = { type: ADD_PRODUCT, payload };

  expect(actions.addToCart(payload)).toEqual(expectedAction);
});


it('creates an action to remove a product from a cart', () => {
  const payload = {
    'name': 'Sledgehammer',
    'price': 125.75
  };

  const expectedAction = { type: REMOVE_PRODUCT, payload };

  expect(actions.removeFromCart(payload)).toEqual(expectedAction);
});
