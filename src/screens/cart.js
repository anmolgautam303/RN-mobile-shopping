// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import CartComponent from '../components/cart';
import { removeFromCart } from '../actions/productAction';

type Props = {
  productsInCart: Array<{name: string, price: number, quantity: number}>,
  removeFromCart: Function
};

class CartContainer extends Component<Props> {
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
