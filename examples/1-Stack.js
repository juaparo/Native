import React from 'react';
import { Button , View, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';

function randomNumber() {
  return Math.floor(Math.random() * 10)
}

class ScreenComponentOne extends React.Component {
  static navigationOptions =  ({ navigation }) => {
    return {
      headerTitle: 'First screen',
      headerTintColor: '#99EEBB',
      headerStyle: {
        backgroundColor: 'teal'
      }
    }
  }

  render() {
    return(
      <View style={{flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 25,
        borderColor: 'teal'
        }}>
        <Button title="Go to two" onPress={()=> {this.props.navigation.navigate('TapTwo')}}/>
      </View>
    )
  }
}

class ScreenComponentTwo extends React.Component {
  static navigationOptions = {
    headerTitle: 'Second screen',
    headerTintColor: '#FFDF77',
    headerStyle: {
      backgroundColor: 'orange'
    }

  }

  render() {
    return(
      <View style={{flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 25,
        borderColor: 'orange'
        }}>
        <Button title="Go to three" onPress={()=> {this.props.navigation.navigate('TapThree', {
          number: randomNumber()
        })}}/>
      </View>
    )
  }
}

  class ScreenComponentThree extends React.Component {
    static navigationOptions = ({navigation}) => {
      return {
        headerTitle: `Number: ${navigation.getParam('number')}`,
      }
    } 

  render() {
    return(
      <View style={{flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 25,
        borderColor: 'blue'
        }}>
        <Text style={{fontSize: 25}}>{this.props.navigation.getParam('number')}</Text>
        <Button title="New number" onPress={() => this.props.navigation.setParams({ number: randomNumber()})}/>
        <View style={{margin: 5}}>
        <Button title="Go back" onPress={()=> {this.props.navigation.goBack()}}/>
        </View>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  TapOne: {
    screen:  ScreenComponentOne
  },
  TapTwo: {
    screen: ScreenComponentTwo
  },
  TapThree: {
    screen: ScreenComponentThree
  }
})

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}