import { Button, Title } from "react-native-paper";
import { DriverHomeProps, RootStackParamList } from "../NavigationTypes";
import { useTailwind } from "tailwind-rn";
import { ScrollView, Text, StyleSheet } from "react-native";
import TrainingModule from "../../components/TrainingModule";

// Driver's home page aka dashboard
const DriverHome = ({ navigation }: DriverHomeProps) => {
  const tailwind = useTailwind();
  return (
    <ScrollView>
      <Title style={styles.module}>Hello Driver</Title>
      <TrainingModule
        style={styles.module} navigation={navigation}
        moduleName="Workplace Ethics"
        moduleSubtitle="Workplace ethics refers to the way employees in an organization govern themselves and their overall work attitude"
      />
      <TrainingModule
        style={styles.module} navigation={navigation}
        moduleName="WHIMS"
        moduleSubtitle="The Workplace Hazardous Materials Information System"
      />
      <TrainingModule
        style={styles.module} navigation={navigation}
        moduleName="Package Integrity"
        moduleSubtitle="A tutorial on making sure packages are integral"
      />
      <Button>Start</Button>
      <Button onPress={() => navigation.navigate("AppHome")}>Go back</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  module: {
    margin: 10,
  },
});

export default DriverHome;