import { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default class ClientHome extends Component {
  render() {
    return (
      <View>
        <Text>Tab One</Text>
        <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <Button
          onPress={() => this.props.navigation.navigate('appHome')}>
              Go back
          </Button>
      </View>
    );
  }
}


