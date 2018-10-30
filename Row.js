import React from 'react'
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

const Row = props => (
  <TouchableOpacity style={[styles.row, styles.center]} onPress={() => {props.onSelectContact(props)}}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </TouchableOpacity>
)


const styles = StyleSheet.create({
  list: {
    textAlign: 'center'
  },
  row:{
    flexDirection: 'column',
    padding: 10
  },
  center: {
    justifyContent: 'center'
  }
});

Row.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string
}

export default  Row
