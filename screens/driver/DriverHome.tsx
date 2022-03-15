import { Component } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { DriverHomeProps, RootStackParamList } from "../../types";
import { useTailwind } from "tailwind-rn";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';




const DriverHome = ({navigation}: DriverHomeProps) => {
  return (
    <View>
      <Text>Driver Home</Text>
      <Button onPress={() => navigation.navigate("AppHome")}>
        Go back
      </Button>
    </View>
  );
};

export default DriverHome;
