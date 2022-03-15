import { Component } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { AppHomeProps, RootStackParamList } from "../types";

const AppHome = ({navigation}: AppHomeProps) => {
  return (
    <View>
      <Text>Home</Text>

      <Button onPress={() => navigation.navigate("DriverHome")}>
        DRIVER
      </Button>
      <Button onPress={() => navigation.navigate("ReturnList")}>
        RETAILER
      </Button>
      <Button onPress={() => navigation.navigate("ClientHome")}>
        CLIENT
      </Button>
    </View>
  );
};

export default AppHome;
