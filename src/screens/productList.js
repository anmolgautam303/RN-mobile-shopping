import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import ProductListComponent from "../components/productList";
import { addToCart, fetchProducts } from "../actions";

class ProductListContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text>Products</Text>,
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <MaterialIcons name="shopping-cart" size={32} />
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <ProductListComponent
        {...this.props}
        loading={this.props.loading}
        products={this.props.products}
        addToCart={this.props.addToCart}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.ProductReducer.loading,
    products: state.ProductReducer.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    addToCart: item => {
      dispatch(addToCart(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
