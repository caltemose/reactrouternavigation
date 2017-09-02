import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = ({ plantsById }) => ({ plantsById });

const PlantDetails = connect(mapStateToProps)(
  ({ plantsById, match }) => {
    const plant = plantsById[match.params.id];
    return (
      <View>
        <Header text="Plant Details" />
        <View style={styles.details}>
          <Text key={plant.id}>{plant.genus} {plant.species}</Text>
        </View>
      </View>
    )
  }
)

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
  }
});

export default PlantDetails;
