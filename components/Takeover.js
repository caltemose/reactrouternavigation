import React from 'react';
import { View, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

export default Takeover = ({ children }) => (
  <View style={styles.takeover}>
    { children }
  </View>
)

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  takeover: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    width,
    height,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
