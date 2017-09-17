import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { test, addPlant } from '../store/actions';

import Header from '../components/Header';
import TextBlock from '../components/TextBlock';

const mapStateToProps = ({ count, plants }) => ({ count, plants });

const Home = connect(mapStateToProps)(
  ({ count, plants }) => (
    <View>
      <Header text="Home" />

      <TextBlock copy={`There are ${plants.length} plants in the database.`}></TextBlock>
    </View>
  )
);

export default Home;

