import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors } from "../../styles";

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GitHubApp</Text>

        <TouchableOpacity onPress={() => {}}>
            <Icon name="exchange" size={14} color={colors.primary} />
        </TouchableOpacity>
      </View>
    );
  }
};
