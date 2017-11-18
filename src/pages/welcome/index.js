import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };

  navigateToUser = () => {
    const { navigate } = this.props.navigation;
    navigate('User');
  };

  render(){
    return(
      <View style={styles.container}>
          <Text style={styles.welcomeTitle}>Bem Vindo!</Text>
          <Text style={styles.welcomeDescription}>
            Para continuar, precisamos que voçê informe seu usuário no GitHub
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu usuário"
          />

          <TouchableOpacity style={styles.button} onPress={this.navigateToUser}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
      </View>
    );
  }
};
