import React from 'react';
import { View, Text } from 'react-native';

import globalStyles from '../styles/globalStyles';

export default class Hello extends React.Component {
  render() {
    return (
      <View>
        <Text style={globalStyles.header}>Hello</Text>
      </View>
    )
  }
}
