import React from 'react';
import { View } from 'react-native';
import { Switch, MemoryRouter, Route } from 'react-router-native';

import Initializer from './screens/Initializer';
import Plants from './screens/Plants';

export default class App extends React.Component {
  render() {
    return (
      <MemoryRouter>
        <Switch>
          <Route exact path="/" component={Initializer} />
          <Route path="/plants" component={Plants} />
        </Switch>
      </MemoryRouter>
    );
  }
}

/*
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
*/

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
