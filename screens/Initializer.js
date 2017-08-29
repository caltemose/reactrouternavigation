import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text, Button } from 'react-native';
import Dimensions from 'Dimensions';

export default class Initializer extends React.Component {
  render() {
    return (
      <View style={styles.initializer}>
        <ActivityIndicator animating={true} size="large" color="#aaa" />
        <Button title="Hide" onPress={this._hide} />
        <Text>Initializer</Text>
      </View>
    )
  }

  _hide = () => {
    console.log('_hide()');
    this.props.onInitialized();
  }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  initializer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#ccc',
    width,
    height,
  }
})
