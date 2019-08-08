// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProductListComponent from '../components/productList';
import { addToCart, fetchProducts } from '../actions/productAction';

type Props = {
  loading: boolean,
  products: Array<{name: string, price: number}>,
  fetchProducts: Function,
  addToCart: Function
};

class ProductListContainer extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text>Products</Text>,
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <MaterialIcons name='shopping-cart' size={32} />
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
        fetchProducts={this.props.fetchProducts}
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
