import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import TabOneScreen from './screens/DriverHome';
import TabTwoScreen from './screens/ClientHome';
import RetailerHome from './screens/RetailerHome';
import DriverHome from './screens/DriverHome';
import AppHome from './screens/AppHome';

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="appHome" component={AppHome} />
        <Stack.Screen name="clientHome" component={TabTwoScreen} />
        <Stack.Screen name="driverHome" component={DriverHome} />
        <Stack.Screen name="retailerHome" component={RetailerHome} />

      </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
