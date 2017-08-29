import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'react-router-native';

export default class Home extends React.Component {
  render() {
    const match = this.props.match;
    console.log(match.url)
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
