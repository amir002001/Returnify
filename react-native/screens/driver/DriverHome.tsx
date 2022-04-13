import { Button, Title } from "react-native-paper";
import { DriverHomeProps, RootStackParamList } from "../NavigationTypes";
import { useTailwind } from "tailwind-rn";
import { ScrollView, Text, StyleSheet } from "react-native";
import TrainingModule from "../../components/TrainingModule";
import { useEffect, useState } from "react";
import ModuleScreen from "./ModuleScreen";

// Driver's home page aka dashboard
const DriverHome = ({ navigation }: DriverHomeProps) => {
  const tailwind = useTailwind();
  const [modules, setModules] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5200/api/Driver/Module", {
      method: "GET",
      mode: "no-cors",
    })
      .then((response) => response.json())
      .then((response) => setModules(response))
      .catch((e) => console.log(e));
  }, []);
  return (
    <ScrollView>
      <Title style={styles.module}>Hello Driver</Title>
      {modules.length !== 0 ? (
        modules.map((value, index) => {
          return (
            <TrainingModule
              moduleName={`module ${index + 1}`}
              moduleSubtitle={`module ${
                index + 1
              } will help you be a better driver.`}
            />
          );
        })
      ) : (
        <Text>Loading...</Text>
      )}
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
