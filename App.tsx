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
import { RootStackParamList } from "./screens/NavigationTypes";
import ClientHome from "./screens/client/ClientHome";
import ReturnListScreen from "./screens/retailer/ReturnListScreen";
import ItemDetailScreen from "./screens/retailer/ItemDetailScreen";
import ReturnItemScreen from "./screens/retailer/ReturnItemScreen";
import ModuleScreen from "./screens/driver/ModuleScreen";
import AssessmentScreen from "./screens/driver/AssessmentScreen";
import AssessmentFeedbackScreen from "./screens/driver/AssessmentFeedbackScreen";
import AssessmentResultScreen from "./screens/driver/AssessmentResultScreen";

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
            <Stack.Screen name="ReturnList" component={ReturnListScreen} />
            <Stack.Screen name="ReturnItem" component={ReturnItemScreen} />
            <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
            <Stack.Screen name="Dispute" component={DisputeScreen} />
            <Stack.Screen name="Module" component={ModuleScreen} />
            <Stack.Screen name="Assessment" component={AssessmentScreen} />
            <Stack.Screen name="AssessmentFeedback" component={AssessmentFeedbackScreen} />
            <Stack.Screen name="AssessmentResult" component={AssessmentResultScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </TailwindProvider>
  );
}
