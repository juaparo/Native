import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Row = props => (
  <View style={[styles.row, styles.center]}>
    <Text  >{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
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

export default  Row