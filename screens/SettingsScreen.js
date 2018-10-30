import React, { Component } from 'react';
import {Button , ScrollView, StyleSheet, Text} from 'react-native';

export default class SettingsScreen extends Component {
  static navigationOptions = {}
  render () {
    return (
      <ScrollView >
        <Text style={styles.text}>Settings comming soon</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  text: {
    textAlign: "center"
  }
});