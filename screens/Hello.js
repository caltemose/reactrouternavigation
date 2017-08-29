import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Hello extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Hello</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginTop: 25,
  }
})
