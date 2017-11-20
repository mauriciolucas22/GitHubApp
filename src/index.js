import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import Routes from './routes'
import "./config/ReactotronConfig";


export default class App extends Component {

  state = {
    userExists: false,
    userChecked: false,
  }

  componentWillMount(){
    this.checkUser().then((response) => {
      this.setState({ userExists: response, userChecked: true });
    });
  };

  checkUser = async () => {
    const user = await AsyncStorage.getItem('@GitHubApp:username');

    return user !== null;
  };

  render() {
    return (
      <Routes />
    );
  }
}
