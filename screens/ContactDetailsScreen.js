import React, { Component } from 'react';
import { Button , Text, View } from 'react-native'

export default class ContactDetailsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('name')
  });
  render() {
    return (
      <View>
        <Text>{this.props.naviagation.getParam('phone')}</Text>
        <Button title="Go to random contact" />
      </View>
    )
  }

  _goTorRandom = () => {
    /// TODO
  };
}
