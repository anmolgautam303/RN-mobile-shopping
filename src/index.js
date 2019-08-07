import React, { Fragment, Component } from "react";
import { SafeAreaView, StyleSheet, FlatList, View, Text } from "react-native";

class App extends Component {
  state = {
    products: [
      {
        name: "Sledgehammer",
        price: 125.75
      },
      {
        name: "Axe",
        price: 190.5
      },
      {
        name: "Bandsaw",
        price: 562.13
      },
      {
        name: "Chisel",
        price: 12.9
      },
      {
        name: "Hacksaw",
        price: 18.45
      }
    ]
  };

  render() {
    const { products } = this.state;
    return (
      <Fragment>
        <SafeAreaView>
          <FlatList
            data={products}
            renderItem={({item}) => <Text>{item.name}</Text>}
            keyExtractor={(item, index) => `key${index}`}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
});

export default App;
