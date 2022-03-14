import { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default class AppHome extends Component {
  render() {
    return (
      <View >
        <Text >Tab One</Text>
        <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <Button
          onPress={() => this.props.navigation.navigate('driverHome')}>DRIVER</Button>
        <Button
          onPress={() => this.props.navigation.navigate('retailerList')}>RETAILER</Button>
        <Button
          onPress={() => this.props.navigation.navigate('clientHome')}>CLIENT</Button>
      </View>
    );
  }
}


