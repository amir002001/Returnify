import {StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function DriverHome({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View>
      <Text>Tab One</Text>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Button
        onPress={() => navigation.navigate('appHome')}>
            Go back
        </Button>
    </View>
  );
}


