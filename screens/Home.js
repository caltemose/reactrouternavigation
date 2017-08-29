import React from 'react';
import { View, Text } from 'react-native';

import globalStyles from '../styles/globalStyles';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text style={globalStyles.header}>Homeeee</Text>
      </View>
    )
  }
}
