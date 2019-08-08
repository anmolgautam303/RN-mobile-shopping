// @flow
import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getPrice } from '../../utilities';

type Props = {
  products: Array<{name: string, price: number}>,
  fetchProducts: Function,
  addToCart: Function,
  loading: boolean
};

class ProductList extends Component<Props> {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderHeader = () => (
    <View style={[styles.row, styles.headerTitles]}>
      <Text style={styles.name}>Name</Text>
      <Text style={styles.price}>Price</Text>
      <Text style={styles.addIcon}>Add</Text>
    </View>
  );

  renderItem = ({ item }: { item: Object }) => {
    const { addToCart } = this.props;

    return (
      <View style={styles.row}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{getPrice(item.price)}</Text>
        <TouchableOpacity
          style={styles.addIcon}
          onPress={() => addToCart(item)}
        >
          <MaterialIcons name='add-circle' size={32} color='green' />
        </TouchableOpacity>
      </View>
    );
  };

  divider = () => <View style={styles.divider} />;

  render() {
    const { loading, products } = this.props;

    if (loading && products.length === 0) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true} />
        </View>
      );
    }

    return (
      <Fragment>
        {products.length > 0 && this.renderHeader()}
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={products}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.divider}
        />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  headerTitles: {
    borderBottomWidth: 1
  },
  divider: {
    backgroundColor: 'black',
    height: 1
  },
  name: {
    flex: 3
  },
  price: {
    flex: 1.2
  },
  addIcon: {
    flex: 0.5
  }
});

export default ProductList;
