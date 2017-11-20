import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Welcome from './pages/welcome';
import Repositories from './pages/repositories';
import Organizations from './pages/organizations';
import Header from './components/Header';

const createRootNavigator = (userExists = false) =>
      StackNavigator({
        Welcome: { screen: Welcome },
        User: {
          screen: TabNavigator({
            Repositories: { screen: Repositories },
            Organizations: { screen: Organizations },
        })
      },
      },
      {
        initialRouteName: userExists ? 'User': 'Welcome',
        navigationOptions: {
          header: props => <Header {...props} />,
        }
      });

export default createRootNavigator;
