import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MemoryRouter, AndroidBackButton, Switch, Route, Link } from 'react-router-native';
import { Provider } from 'react-redux';

import s3 from './store/s3';
import configureStore from './store/store';

import Initializer from './screens/Initializer';
import Home from './screens/Home';
import Hello from './screens/Hello';
import AddPlant from './screens/AddPlant';
import FooterNav from './components/FooterNav';
import PlantDetails from './screens/PlantDetails';

export default class App extends React.Component {
  state = {
    isInitialized: false,
  }

  constructor (props) {
    super(props);
    this.store = configureStore();
  }

  componentWillMount () {
    s3.loadPreferences(this._onInitialized);
    // this._onInitialized({ plants:[] });
  }

  render() {
    return (
      <Provider store={this.store}>
        <MemoryRouter>
          <View style={styles.mainContainer}>
            <AndroidBackButton />

            {this.state.isInitialized && 
              <View>
                <View style={styles.content}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/hello" component={Hello} />
                    <Route path="/plants/:id" component={PlantDetails} />
                    <Route path="/add" component={AddPlant} />
                  </Switch>
                </View>

                <FooterNav />
              </View>
            }

            {!this.state.isInitialized && <Initializer onInitialized={ this._onInitialized } />}
          </View>
        </MemoryRouter>
      </Provider>
    );
  }

  _onInitialized = (results) => {
    if (results.err) {
      console.log(results.err);
    } else {
      this.store.dispatch({ type: 'SET_PLANTS', payload: results.plants });
      this.setState({ isInitialized: true });
    }
  }

}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 25,
  },
  content: {
    height: '90%',
  },
});

