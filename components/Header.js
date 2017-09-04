import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Header = ({ text }) => (
  <View style={styles.headerBg}>
    <Text style={styles.header}>{text.toUpperCase()}</Text>
  </View>
)

const styles = StyleSheet.create({
  headerBg: {
    paddingVertical: 12,
    backgroundColor: '#82d75d',
  },
  header: {
    fontSize: 14,
    marginTop: 0,
    textAlign: 'center',
  },
});
