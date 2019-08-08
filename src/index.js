import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProductList from './screens/productList';
import Cart from './screens/cart';

const AppNavigator = createStackNavigator({
  ProductList: {
    screen: ProductList
  },
  Cart: {
    screen: Cart
  }
});

export default createAppContainer(AppNavigator);
