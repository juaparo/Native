import React , { Component } from 'react';
import { Button , View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import ContactsList from '../ContactList'

export default class ContactListScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Contacts',
    headerRight: <Button title="Add" onPress={()=> {
      navigation.navigate('AddContact')
    }} />
  });

  state = {
    showContacts: true
  }

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState .showContacts}))
  }

  showForm = () => {
    this.props.navigation.navigate('AddContact');
  }

  render() {
    // return <View />; 
    return (
      <View style={styles.container}>
        {/* <Button title="toggle contacts" onPress={this.toggleContacts} /> */}
        {/* <View style={styles.buttonPad}>
         <Button  title="Add Contact" onPress={this.showForm} />
        </View> */}
          {this.state.showContacts &&  (
          <ContactsList contacts={this.props.screenProps.contacts} />
          )}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  items: {
    display: 'flex'
  },
  buttonPad: {
    marginTop: 5
  }
 
});