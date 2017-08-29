import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = ({ plants }) => ({ plants });

const Hello = connect(mapStateToProps)(
  ({ plants }) => (
    <View>
      <Header text="All Plants" />
      <View style={styles.list}>
        {
          plants.map(plant => (
            <Text>{plant.commonName}</Text>
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
  }
});

export default Hello;
