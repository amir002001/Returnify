import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function AppHome({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View >
      <Text >Tab One</Text>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Button title="DRIVER"
        onPress={() => navigation.navigate('driverHome')}></Button>
        <Button title="RETAILER"
        onPress={() => navigation.navigate('retailerHome')}></Button>
        <Button title="CLIENT"
        onPress={() => navigation.navigate('clientHome')}></Button>
    </View>
  );
}

