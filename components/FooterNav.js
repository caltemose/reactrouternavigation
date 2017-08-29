import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

export default FooterNav = () => (
  <View style={styles.nav}>
    <Link to={`/`} style={styles.navItem} underlayColor="#eee">
      <Text style={styles.navText}>Home</Text>
    </Link>
    <Link to={`/hello`} style={styles.navItem} underlayColor="#eee">
      <Text style={styles.navText}>Plants</Text>
    </Link>
    <Link to={`/add`} style={styles.navItem} underlayColor="#eee">
      <Text style={styles.navText}>Add</Text>
    </Link>
  </View>
)

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '10%',
    backgroundColor: '#333',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  navText: {
    color: 'white',
    fontSize: 16,
  },
});


