import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { ClientHomeProps } from "../NavigationTypes";

const ClientHome = ({ navigation }: ClientHomeProps) => {
  return (
    <View>
      <Text>Tab One</Text>
      <Button onPress={() => navigation.navigate("AppHome")}>Go back</Button>
    </View>
  );
};

export default ClientHome;
