import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, StyleSheet, View } from 'react-native';

import Splash from './src/Splash';
import Login from './src/Login';

export default class LoginIndex extends Component {

render() {
      return (   
          <Navigator
          initialRoute={{id: 'login'}}
          renderScene={(route, nav) => {return this.renderScene(route, nav)}}
          />
      )
}

renderScene(route, nav) {
    switch(route.id) {
      case 'login':
        return <Login navigator={nav} />
      case 'splash':
        return <Splash navigator={nav} />
    }
}



}

const styles = StyleSheet.create ({



})
