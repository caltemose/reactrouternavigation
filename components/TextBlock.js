import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default TextBlock = ({ copy }) => (
  <View style={styles.block}>
    <Text>{copy}</Text>
  </View>
)

const styles = StyleSheet.create({
  block: {
    marginHorizontal: 10,
  }
});


