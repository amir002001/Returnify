import { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default class RetailerHome extends Component {

  constructor(props: Object) {
    super(props);


    this.state = {}

  }
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('retailerList')}>
          Return List
        </Button>



        <Button
          onPress={() => this.props.navigation.navigate('appHome')}>
          Go back
        </Button>
      </View>
    );
  }
}
