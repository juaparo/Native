
import React from 'react';
import { Button, SectionList, StyleSheet, Text, View , FlatList} from 'react-native';
import { Constants } from 'expo'
import { createStackNavigator } from 'react-navigation'
import contacts, {compareNames} from './contacts'
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';


const AppNavigator = createStackNavigator({
  AddContact: {
    screen: AddContactScreen
  },
  ContactList: {
    screen: ContactListScreen
  }
},{
  initialRouteName: 'ContactList'
})

export default class App extends React.Component {
    state = {
      contacts: contacts
    }

  addContact = newContact => {
    this.setState(prevState => ({ 
      showForm: false, 
      contacts: [...prevState.contacts, newContact]
    }))
  }

  // toggleForm = () => {
  //   this.setState(prevState => ({showForm: !prevState.showForm}))
  // }
 
  render() {
    return <AppNavigator screenProps={{contacts: this.state.contacts, addContact: this.addContact}}/>
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
