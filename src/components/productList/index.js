import React, {Component, Fragment} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.row}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity
          onPress={() => alert("This is a button!")}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  };

  divider = () => <View style={styles.divider} />;

  render() {
    const { loading, products } = this.props;

    if (loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true}/>
        </View>
      );
    }

    return (
      <Fragment>
        <Text style={styles.heading}>Products:</Text>
        <FlatList
          keyExtractor={(item, index) => `key${index}`}
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
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  heading: {
    padding: 20,
    color: 'green'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  divider: {
    backgroundColor: 'black',
    height: 1
  },
  name: {
    flex: 2
  },
});

export default App;
