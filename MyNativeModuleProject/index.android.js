/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import MyNativeModule from 'my-native-module';

export default class MyNativeModuleProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={()=>{
              MyNativeModule.showMyToast("Hello World From JS",3000,(msg)=>{
                  alert(msg);
              });
          }}
        >
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyNativeModuleProject', () => MyNativeModuleProject);
