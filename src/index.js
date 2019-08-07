import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProductList from './screens/productList';

const AppNavigator = createStackNavigator({
  ProductList: {
    screen: ProductList
  }
});

export default createAppContainer(AppNavigator);
