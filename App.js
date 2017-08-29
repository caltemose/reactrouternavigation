import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AndroidBackButton, Switch, MemoryRouter, Route, Link } from 'react-router-native';
import globalStyles from './styles/globalStyles';

import Home from './screens/Home';
import Hello from './screens/Hello';
import Initializer from './screens/Initializer';

export default class App extends React.Component {
  state = {
    isInitialized: false,
  }

  render() {
    return (
      <MemoryRouter>
        <View style={globalStyles.mainContainer}>
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
  main: {
    marginTop: 30,
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


/*
<NativeRouter>
  <Navigation 
    title="React Router Navigation"
    navBarStyle={{ backgroundColor: 'red', paddingTop: 30 }}
    titleStyle={{ flex: 1, alignSelf: 'center' }}
  >
    <Card exact path="/" component={Home} />
    <Card path="/hello" component={Hello} />
  </Navigation>
</NativeRouter>


{this.state.isLoading && <Initializer onInitialized={this._onInitialized} />}
{!this.state.isLoading &&
  <View>
    <View style={styles.nav}>
      <Link to="/" style={styles.navItem} underlayColor="#eee">
        <Text>Home</Text>
      </Link>
      <Link to="/hello" style={styles.navItem} underlayColor="#eee">
        <Text>Hello</Text>
      </Link>
    </View>
    <Route path="/" component={Home} />
    <Route path="/hello" component={Hello} />
  </View>
}
<Text>
  this.state.isLoading: {this.state.isLoading}
</Text>
*/
