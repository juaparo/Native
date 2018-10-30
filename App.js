
import React from 'react';
import { Button, SectionList, StyleSheet, Text, View , FlatList} from 'react-native';
import { Constants } from 'expo'
import { createStackNavigator, createSwitchNavigator, createTabNavigator } from 'react-navigation'
import contacts, {compareNames} from './contacts'
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import LoginScreen from './screens/LoginScreen'
import SettingsScreen from './screens/SettingsScreen';

const ContactsTab = createStackNavigator({
  AddContact: {
    screen: AddContactScreen
  },
  ContactList: {
    screen: ContactListScreen
  },
  ContactDetails: {
    screen: ContactDetailsScreen
  }
},{
  initialRouteName: 'ContactList',
  navigationOptions: {
    headerTintColor: '#a41034'
  }
});

const MainNavigator = createTabNavigator({
  Contacts: {
    screen: ContactsTab
  },
  Settings: {
    screen: SettingsScreen
  }
})

const AppNavigator = createSwitchNavigator({
  Main: {
    screen: MainNavigator
  },
  Login: {
    screen: LoginScreen
  }
},{
  initialRouteName: 'Login'
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
