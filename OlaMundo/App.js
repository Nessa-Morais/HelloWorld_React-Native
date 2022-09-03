import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <Text style={{fontSize: 30, color:'blue'}}>Olá Mundo!!!</Text>
    )
  }
}
