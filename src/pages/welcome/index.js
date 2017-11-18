import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };

  render(){
    return(
      <View style={styles.container}>
          <Text style={styles.welcomeTitle}></Text>
          <Text style={styles.welcomeDescription}>
            Para continuar, precisamos que voçê informe seu usuário no GitHub
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Degite seu usuário"
          />

          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
      </View>
    );
  }
};
