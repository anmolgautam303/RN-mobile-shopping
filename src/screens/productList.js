import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Text } from "react-native";

import ProductListComponent from "../components/productList";
import { fetchProducts } from "../actions";

class ProductListContainer extends Component {
  static navigationOptions = {
    headerTitle: <Text>Mobile Shopping</Text>,
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="Info"
        color="green"
      />
    )
  };
  render() {
    return (
      <ProductListComponent
        {...this.props}
        loading={this.props.loading}
        products={this.props.products}
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
