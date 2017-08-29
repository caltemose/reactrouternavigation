import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import Header from '../components/Header';

const Home = connect(
  ({ count} ) => ({ count })
)(
  ({ count, dispatch }) => (
    <View>
      <Header text="Home" />
      <Text>count: {count}</Text>
      <Button title="TEST" onPress={() => dispatch({ type: 'TEST'})} />
    </View>
  )
);

export default Home;
