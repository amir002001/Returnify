import { Component } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { ClientHomeProps } from "../../types";

const ClientHome = ({ navigation }: ClientHomeProps) => {
  return (
    <View>
      <Text>Tab One</Text>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Button onPress={() => navigation.navigate("AppHome")}>Go back</Button>
    </View>
  );
};

export default ClientHome;
