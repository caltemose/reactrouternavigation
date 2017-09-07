import React from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';

import s3 from '../store/s3';
import { addPlant } from '../store/actions';

import Header from '../components/Header';

class AddPlantComponent extends React.Component {
  state = {
    commonName: '',
    genus: '',
    species: '',
    image: '',
    submitted: false,
  };

  render() {
    return (
      <View>
        <Header text="Add Plant" />

        {!this.state.submitted &&
        <View>
          <TextInput 
            onChangeText={(text) => this.setState({ commonName: text }) }
            style={styles.textInput}
            autoCorrect={false}
            autoCapitalize='words'
            placeholder='Common name'
          />
          <TextInput 
            onChangeText={(text) => this.setState({ genus: text }) }
            style={styles.textInput}
            autoCorrect={false}
            autoCapitalize='sentences'
            placeholder='Genus'
          />
          <TextInput 
            onChangeText={(text) => this.setState({ species: text }) }
            style={styles.textInput}
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Species'
          />
          <Button
            onPress={this._submit}
            title="Add Plant"
          />
        </View>
        }

        {this.state.submitted &&
          <View>
            <Link to={`/plants/${this.state.id}`}>
              <Text>View Plant</Text>
            </Link>

            <Button
              onPress={this._reset}
              title="Add Another Plant"
            />

            <Link to="/hello">
              <Text>View All Plants</Text>
            </Link>
          </View>
        }
      </View>
    )
  }

  _submit = () => {
    let newPlant = {
      commonName: this.state.commonName,
      genus: this.state.genus,
      species: this.state.species,
    };
    newPlant.id = new Date().getTime();
    
    this.setState({
      id: newPlant.id,
      submitted: true,
    });

    this.props.addPlant(newPlant);
    console.log(this.props.store);
    // redirect or show next steps (view plant, add another, see all plants)
    s3.savePreferences(this.props.store, this._onPrefsSaved);
  }

  _onPrefsSaved = (result) => {
    if (result.err) {
      console.error(result);
    } else {
      console.log('prefs saved to s3');
    }
  }

  _reset = () => {
    this.setState({
      submitted: false,
      commonName: '',
      genus: '',
      species: '',
    });
  }
};

const mapStateToProps = (state) => ({ store: state });

const mapDispatchToProps = { addPlant };

export default AddPlant = connect(mapStateToProps, mapDispatchToProps)(AddPlantComponent)

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
