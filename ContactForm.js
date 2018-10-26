import React from 'react'
import {TextInput, View, Button, StyleSheet, KeyboardAvoidingView} from 'react-native'
import PropTypes from 'prop-types'
import {Constants} from 'expo'

export default class ContactForm extends React.Component {
  static propTypes = {
    addContact: PropTypes.func
  }

  state = {
    name: '',
    phone: '',
    isFormValid: false
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.name !== prevState.name || this.state.phone !== prevState.phone){
      this.validateForm()
    }
  }
  
  getHandler = key => val => {
      this.setState({[key]: val})
  }
  
  handleNameCHange = this.getHandler('name')
  handlePhoneChange = this.getHandler('phone')

  // handleNameChange = name => {
  //   this.setState({name}, this.validateForm)
  // }

  handlePhoneChange = phone => {
    if(+phone >= 0 && phone.length <= 10){
      this.setState({phone}, this.validateForm)
    }
  }
  
  validateForm = () => {
    const names = this.state.name.split(' ')
    if(+this.state.phone >= 0 && this.state.phone.length === 10 && names.length >= 2 && names[0] && names[1]){
       this.setState({isFormValid: true})
    } else {
       this.setState({isFormValid: false})
    }
  }

  handleSubmit = () => {
      this.props.onSubmit({name: this.state.name, phone: this.state.phone})
    
  }
  render () {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput 
          style={styles.input} 
          value={this.state.name} 
          onChangeText={this.getHandler('name')}
          placeholder="Name"
          underlineColorAndroid={'transparent'}
        />
        <TextInput 
          style={styles.input} 
          value={this.state.phone} 
          onChangeText={this.getHandler('phone')}
          keyboardType="numeric"
          placeholder="Phone"
          underlineColorAndroid={'transparent'}
        />
        <View style={styles.buttonSubmit}>
          <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center'
  },
  input : {
   // padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    minWidth: 100,
    marginTop: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    
  },
  buttonSubmit: {
    margin: 5,
    minWidth: 100,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
})

