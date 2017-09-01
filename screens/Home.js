import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { test, addPlant } from '../store/actions';

import Header from '../components/Header';

const samplePlant = () => {
  const id = new Date().getTime();
  return {
    commonName: 'Cast Iron Plant',
    genus: 'Aspidistra',
    species: 'elatior',
    id,
  }
};

const mapStateToProps = ({ count, plants }) => ({ count, plants });

const mapDispatchToProps = { test, addPlant };

const Home = connect(mapStateToProps, mapDispatchToProps)(
  ({ count, plants, test, addPlant }) => (
    <View>
      <Header text="Home" />
      <Text>count: {count}</Text>
      <Button title="TEST" onPress={() => test() } />
      <Text># plants: {plants.length}</Text>
      <Button title="ADD PLANT" onPress={() => { addPlant(samplePlant()) }} />
    </View>
  )
);

export default Home;
