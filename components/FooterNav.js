import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const hilite = "#111";

export default FooterNav = () => (
  <View style={styles.nav}>
    <Link to={`/`} style={styles.navItem} underlayColor={hilite}>
      <Text style={styles.navText}>Home</Text>
    </Link>
    <Link to={`/hello`} style={styles.navItem} underlayColor={hilite}>
      <Text style={styles.navText}>Plants</Text>
    </Link>
    <Link to={`/add`} style={styles.navItem} underlayColor={hilite}>
      <Text style={styles.navText}>Add</Text>
    </Link>
  </View>
)

const styles = StyleSheet.create({
  nav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  navText: {
    color: 'white',
    fontSize: 16,
  },
});


