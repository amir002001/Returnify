import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { AppHomeProps, RootStackParamList } from "./NavigationTypes";

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
