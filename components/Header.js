import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Header = ({ text }) => (
  <View>
    <Text style={styles.header}>{text}</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    marginTop: 25,
    textAlign: 'center',
  },
});
