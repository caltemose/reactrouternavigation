import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Link } from 'react-router-native';

import Header from '../components/Header';

const mapStateToProps = ({ plants }) => ({ plants });

const Hello = connect(mapStateToProps)(
  ({ plants }) => (
    <View>
      <Header text="All Plants" />
      <View style={styles.list}>
        {
          plants.map(plant => (
            <Link style={styles.navItem} key={plant.id} to={`/plants/${plant.id}`}>
              <Text style={styles.navText}>{plant.commonName}</Text>
            </Link>
          ))
        }
      </View>
    </View>
  )
)

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
  },
  navItem: {
    flex: 1,
    padding: 20,
  },
  navText: {
    color: 'black',
    fontSize: 16,
    minHeight: 22,
  },
});




export default Hello;
