import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MemoryRouter, Switch, Route, Link, AndroidBackButton } from 'react-router-native';
import globalStyles from '../styles/globalStyles';

import Home from './Home';
import Hello from './Hello';

export default class Plants extends React.Component {
  render() {
    const match = this.props.match;
    console.log('plants match:', match.url)
    return (
      <MemoryRouter>
        <View style={globalStyles.mainContainer}>
          <AndroidBackButton />
          <View style={styles.nav}>
            <Link to={`/plants`} style={styles.navItem} underlayColor="#eee">
              <Text>Home</Text>
            </Link>
            <Link to={`/plants/hello`} style={styles.navItem} underlayColor="#eee">
              <Text>Hello</Text>
            </Link>
          </View>
          <Switch>
            <Route exact path={`/plants`} component={Home} />
            <Route path={`/plants/hello`} component={Hello} />
          </Switch>
        </View>
      </MemoryRouter>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginTop: 25,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});
