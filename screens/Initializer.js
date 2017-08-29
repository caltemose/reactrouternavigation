import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text, Button } from 'react-native';
import Takeover from '../components/Takeover';

export default class Initializer extends React.Component {
  render() {
    return (
      <Takeover>
        <ActivityIndicator animating={true} size="large" color="#ccc" />

        <Text style={styles.loadingText}>Initializing app...</Text>

        <Button title="Hide" onPress={this._hide} />
      </Takeover>
    )
  }

  _hide = () => {
    this.props.onInitialized();
  }
}

const styles = StyleSheet.create({
  loadingText: {
    marginVertical: 30,
    color: '#fff'
  },
})
