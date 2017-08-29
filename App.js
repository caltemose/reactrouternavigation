import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MemoryRouter, AndroidBackButton, Switch, Route, Link } from 'react-router-native';

import Initializer from './screens/Initializer';
import Home from './screens/Home';
import Hello from './screens/Hello';

export default class App extends React.Component {
  state = {
    isInitialized: false,
  }

  render() {
    return (
      <MemoryRouter>
        <View style={styles.mainContainer}>
          <AndroidBackButton />

          <View style={styles.nav}>
            <Link to={`/`} style={styles.navItem} underlayColor="#eee">
              <Text>Home</Text>
            </Link>
            <Link to={`/hello`} style={styles.navItem} underlayColor="#eee">
              <Text>Hello</Text>
            </Link>
          </View>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hello" component={Hello} />
          </Switch>

          {!this.state.isInitialized && <Initializer onInitialized={ this._onInitialized } />}
        </View>
      </MemoryRouter>
    );
  }

  _onInitialized = () => {
    this.setState({ isInitialized: true });
  }

}

const styles = StyleSheet.create({
  mainContainer: {
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
  }
});

