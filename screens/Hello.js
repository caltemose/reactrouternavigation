import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Link } from 'react-router-native';

import Header from '../components/Header';

const mapStateToProps = ({ plants }) => ({ plants });

const keyExtractor = (item, index) => item.id;

const renderListItem = ({ item }) => (
  <Link style={styles.navItem} to={`/plants/${item.id}`}>
    <Text style={styles.navText}>{item.genus} {item.species}</Text>
  </Link>
);

const Hello = connect(mapStateToProps)(
  ({ plants }) => {
    console.log(plants);
    return (
    <View>
      <Header text="All Plants" />

      <FlatList
        data={plants}
        keyExtractor={keyExtractor}
        renderItem={renderListItem}
      />
    </View>
    )
  }
)

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
  },
  navItem: {
    flex: 1,
    padding: 5,
  },
  navText: {
    color: 'black',
    fontSize: 16,
    minHeight: 22,
  },
});




export default Hello;
