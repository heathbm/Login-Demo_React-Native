import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, StyleSheet, View, TextInput, 
TouchableOpacity, TouchableWithoutFeedback, StatusBar } from 'react-native';
const dismissKeyboard = require('dismissKeyboard');

export default class Splash extends Component {

constructor() {
  super()

  this.state = {
    sideA: 0,
    sideB: 0,
    hyp: 0,
    area: 0,
    peri: 0,
  }
}

render() {
      return (
        <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
        <View style={styles.container}>
        <StatusBar barStyle='light-content' />

            <View style={styles.titleWrapper}>
                <Text style={[styles.text, styles.titleText]} >Welcome to the triangle calculator</Text>
                <Text style={styles.text} >Enter side A and B</Text>
            </View>
           
            <View style={styles.inputWrapper} >
                <TextInput style={styles.input} 
                placeholder='Enter side A' 
                placeholderTextColor='rgba(255,255,255,0.5)'
                keyboardType='numeric'
                onChangeText={(sideA) => this.setState({sideA})}
                />
                <TextInput style={styles.input} 
                placeholder='Enter side B' 
                placeholderTextColor='rgba(255,255,255,0.5)'
                keyboardType='numeric'
                onChangeText={(sideB) => this.setState({sideB})}
                />
            </View>
           
            <View style={styles.calcWrapper} >
                <TouchableOpacity style={styles.button} onPress={this.calculate.bind(this)} >
                      <Text style={styles.buttonText} >Calculate</Text>
                </TouchableOpacity>
            </View>
            {this.answersFunc()}
         </View>
         </TouchableWithoutFeedback>

      )
}

calculate() {
    dismissKeyboard();
    if(this.state.sideA != 0 && this.state.sideB != 0) {

      a = Number(this.state.sideA);
      b = Number(this.state.sideB);
      c = Math.hypot(a,b);

        this.setState ({
          hyp: Number(c).toFixed(2),
          area: Number((a * b) / 2).toFixed(2),
          peri: Number(a + b + c).toFixed(2),
        });
    }
}

answersFunc() {
    return (
       <View style={styles.answersWrapper} >
           <Text style={[styles.answers, styles.text]} >Hypotenuse = {this.state.hyp}</Text>
           <Text style={[styles.answers, styles.text]} >Area = {this.state.area}</Text>
           <Text style={[styles.answers, styles.text]} >Perimeter = {this.state.peri}</Text>
       </View> 
    );
}

}

const styles = StyleSheet.create ({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
  },

  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
      marginBottom: 10,
  },

  text: {
    color: 'white',
    fontWeight: '200',
    fontSize: 20,
  },

  inputWrapper: {
    flex: 1,
  },

  input: {
    height: 60,
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 40,
    color: '#FFF',
    paddingHorizontal: 10,
  },

  calcWrapper: {
    flex: 0.5,
  },

  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    width: 300,
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '500',
  },

  answersWrapper: {
    flex: 1,
  },

  answers: {
    flex: 1,
  }

})
