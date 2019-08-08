import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";

import CartComponent from "../components/cart";
import { removeFromCart } from '../actions';

class CartContainer extends Component {
  static navigationOptions = {
    headerTitle: <Text>Cart</Text>
  };

  render() {
    return (
      <CartComponent
        {...this.props}
        productsInCart={this.props.productsInCart}
        removeFromCart={this.props.removeFromCart}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    addingProductsToCart: state.ProductReducer.addingProductsToCart,
    productsInCart: state.ProductReducer.productsInCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: item => {
      dispatch(removeFromCart(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
