import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Homeeee</Text>
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
