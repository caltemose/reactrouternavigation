import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text, Button } from 'react-native';
import { Redirect } from 'react-router-native';
import globalStyles from '../styles/globalStyles';

export default class Initializer extends React.Component {
  state = {
    initialized: false,
  }

  render() {
    console.log('this.state.initialized', this.state.initialized);
    return (
      <View style={globalStyles.mainContainer}>
        <ActivityIndicator animating={true} size="large" color="#aaa" />
        <Button title="Hide" onPress={this._hide} />

        {this.state.initialized && <Redirect push to="/plants" />}
      </View>
    )
  }

  _hide = () => {
    console.log('_hide()');
    this.setState({
      initialized: true,
    });
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginTop: 25,
  }
})
