import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';

import Splash from './Splash';
import Login from './Login';

export default class LoginForm extends Component {

constructor(props) {
  super() 
  navigator = props.navigator;
}

render() {
      return (
          <View style={styles.container} >
              <TextInput style={styles.input} 
              placeholder='Username or email' 
              placeholderTextColor='rgba(255,255,255,0.5)'
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              />
              <TextInput style={styles.input} 
              placeholder='Password' 
              placeholderTextColor='rgba(255,255,255,0.5)' 
              secureTextEntry 
              returnKeyType='go'
              ref={(input) => this.passwordInput = input }
              />
              <TouchableOpacity style={styles.button} onPress={this.moveScene.bind(this)} >
                  <Text style={styles.buttonText} >LOGIN</Text>
              </TouchableOpacity>
          </View>
      )
}

moveScene() {
  this.props.navigator.replace({id: "splash"});
}


}

var styles = StyleSheet.create ({

  container: {
    padding: 20
  },

  input: {
    height: 40,
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 15,
    color: '#FFF',
    paddingHorizontal: 10,
  },

  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '500',
  }

})
