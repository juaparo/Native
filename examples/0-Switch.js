import React from 'react';
import { Button , View} from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

class ScreenComponentOne extends React.Component {
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
  render() {
    return(
      <View style={{flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 25,
        borderColor: 'orange'
        }}>
        <Button title="Go to one" onPress={()=> {this.props.navigation.navigate('TapOne')}}/>
      </View>
    )
  }
}

const AppNavigator = createSwitchNavigator({
  TapOne: {
    screen:  ScreenComponentOne
  },
  TapTwo: {
    screen: ScreenComponentTwo
  }
})

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}