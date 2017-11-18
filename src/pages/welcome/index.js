import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
  };

  navigateToUser = () => {
    if(this.state.username.length === 0) return;

    const { dispatch } = this.props.navigation;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'User' }),
      ],
    });
    dispatch(resetAction);
  };

  render(){
    return(
      <View style={styles.container}>
          <Text style={styles.welcomeTitle}>Bem Vindo!</Text>
          <Text style={styles.welcomeDescription}>
            Para continuar, precisamos que voçê informe seu usuário no GitHub
          </Text>

          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder="Digite seu usuário"
            onChangeText={(username) => { this.setState({username}); }}
          />

          <TouchableOpacity style={styles.button} onPress={this.navigateToUser}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
      </View>
    );
  }
};
