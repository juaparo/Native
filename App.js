import React from 'react';
import { Button, SectionList, StyleSheet, Text, View , FlatList} from 'react-native';
import {Constants} from 'expo'

import contacts, {compareNames} from './contacts'
import Row from './Row'
import ContactsList from './ContactList'
import ContactForm from './ContactForm'

export default class App extends React.Component {
    state = {
      showContacts: true,
      showForm: false,
      contacts: contacts
    }

  addContact = newContact => {
    this.setState(prevState => ({ showForm: false, contacts: [...prevState.contacts, newContact]}  ))
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  toggleForm = () => {
    this.setState(prevState => ({showForm: !prevState.showForm}))
  }

  sortContacts = ()  => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }))
  };

 showForm = () => {
   this.setState({showForm: true})
 }
  render() {
    if(this.state.showForm) return <ContactForm  onSubmit={this.addContact} />
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <View style={styles.buttonPad}>
          <Button  title="Add Contact" onPress={this.showForm} />
        </View>
          {this.state.showContacts &&  <ContactsList contacts={this.state.contacts}/>}
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
