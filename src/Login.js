import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, StyleSheet, View, Image, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from 'react-native';
const dismissKeyboard = require('dismissKeyboard');

import Splash from './Splash';
import LoginForm from './LoginForm';

export default class Login extends Component {

constructor(props) {
  super() 
  navigator = props.navigator;
}

render() {
      return (
          <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
          <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar 
            barStyle='light-content'
            />
              <View style={styles.logoContainer}>
                  <Image style={styles.logo} source={require('./images/logo.png')} />
                  <Text style={styles.title} >HBM APP FOR TESTING</Text>
              </View>
              <View style={styles.formContainer}>
                  <LoginForm navigator={navigator} />
              </View>

          </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
      );
}

}

var styles = StyleSheet.create ({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
  },

  logo: {
    width: 140,
    height: 140,
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  
  title: {
    color: '#FFF',
    marginTop: 15,
    textAlign: 'center',
    fontSize: 20,
    opacity: 0.95,
  },



})
