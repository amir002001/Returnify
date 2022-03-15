import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import DriverHome from "./screens/driver/DriverHome";
import AppHome from "./screens/AppHome";
import DisputeScreen from "./screens/retailer/DisputeScreen";
import { RootStackParamList } from "./types";
import ClientHome from "./screens/client/ClientHome";
import ReturnListScreen from "./screens/retailer/ReturnListScreen";
import ItemDetailScreen from "./screens/retailer/ItemDetailScreen";
import ReturnItemScreen from "./screens/retailer/ReturnItemScreen";
import ProductDetails from "./screens/client/ProductDetails";


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="AppHome" component={AppHome} />
            <Stack.Screen name="DriverHome" component={DriverHome} />
            <Stack.Screen name="ClientHome" component={ClientHome} />
            <Stack.Screen name="OrderDetails" component={ProductDetails} />
            <Stack.Screen name="ReturnList" component={ReturnListScreen} />
            <Stack.Screen name="ReturnItem" component={ReturnItemScreen} />
            <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
            <Stack.Screen name="Dispute" component={DisputeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </TailwindProvider>
  );
}
