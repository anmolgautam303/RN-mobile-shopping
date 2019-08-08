// @flow
import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getPrice } from '../../utilities';

type Props = {
  productsInCart: Array<{name: string, price: number, quantity: number}>,
  removeFromCart: Function
};

class Cart extends Component<Props> {
  listEmptyComponent = () => (
    <View style={styles.emptyList}>
      <Text>Your shopping cart is empty</Text>
    </View>
  );

  removeFromCartConfirmation = (item: Object) => {
    const { removeFromCart } = this.props;

    Alert.alert(
      'Confirmation',
      `Remove ${item.name} from the cart?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => removeFromCart(item) }
      ],
      { cancelable: false }
    );
  };

  renderItem = ({ item }: { item: Object }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.mgBtm}>Name: {item.name}</Text>
        <Text style={styles.mgBtm}>Price: {getPrice(item.price)}</Text>
        <Text style={styles.mgBtm}>Qty: {item.quantity}</Text>
        <Text style={styles.mgBtm}>
          Total: {getPrice(item.quantity * item.price)}
        </Text>
        <TouchableOpacity onPress={() => this.removeFromCartConfirmation(item)}>
          <MaterialIcons name='remove-circle' size={32} color='red' />
        </TouchableOpacity>
      </View>
    );
  };

  divider = () => <View style={styles.divider} />;

  getSubPrice = () => {
    const { productsInCart } = this.props;

    return productsInCart.reduce((sum, { price, quantity }) => {
      return sum + price * quantity;
    }, 0);
  };

  renderTotal = () => {
    return (
      <View style={styles.subTotal}>
        <Text style={styles.subtotal}>
          {`Sub total: ${getPrice(this.getSubPrice())}`}
        </Text>
      </View>
    );
  };

  render() {
    const { productsInCart } = this.props;

    return (
      <Fragment>
        {productsInCart.length > 0 && this.renderTotal()}

        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={productsInCart}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.divider}
          ListEmptyComponent={this.listEmptyComponent}
          contentContainerStyle={styles.flatListStyle}
        />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  flatListStyle: {
    flexGrow: 1
  },
  emptyList: {
    alignItems: 'center',
    marginTop: 60
  },
  item: {
    padding: 20
  },
  headerTitles: {
    borderBottomWidth: 1
  },
  divider: {
    backgroundColor: 'black',
    height: 1
  },
  mgBtm: {
    marginBottom: 10
  },
  subTotal: {
    borderBottomWidth: 1,
    padding: 20
  },
  subtotal: {
    fontWeight: 'bold'
  }
});

export default Cart;
