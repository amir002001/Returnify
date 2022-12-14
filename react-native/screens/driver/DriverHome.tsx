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
    fetch("http://20.70.34.47/api/Driver/Module", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {setModules(response)})
      .catch((e) => console.log(e));
  }, []);
  return (
    <ScrollView>
      <Title style={styles.module}>Hello Driver</Title>
      {modules.length !== 0 ? (
        modules.map((value: any, index) => {
          return (
            <TrainingModule
              key={index}
              moduleId={value.id}
              navigation = {navigation}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  module: {
    margin: 10,
  },
});
export default DriverHome;
