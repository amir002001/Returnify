import { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Title } from "react-native-paper";
import { AppHomeProps, RootStackParamList } from "./NavigationTypes";

const AppHome = ({ navigation }: AppHomeProps) => {
  return (
    <View>
      <Title style={{ textAlign: "center" }}>Weclome to Returnify!</Title>
      <View
        style={{
          height: "100%",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <TouchableOpacity
          style={{ marginBottom: 10 }}
          onPress={() => navigation.navigate("DriverHome")}
        >
          <Image
            style={{
              width: 180,
              height: 180,
              alignSelf: "center",
              borderRadius: 5,
            }}
            source={{ uri: "https://picsum.photos/id/1071/200" }}
          ></Image>

          <Title style={{alignSelf: "center", color: "purple"}}>LOGIN AS RETAILER</Title>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginBottom: 10 }}
          onPress={() => navigation.navigate("ReturnList")}
        >
          <Image
            style={{
              width: 180,
              height: 180,
              alignSelf: "center",
              borderRadius: 5,
            }}
            source={{ uri: "https://picsum.photos/id/1/200" }}
          ></Image>

          <Title style={{alignSelf: "center", color: "purple"}}>LOGIN AS RETAILER</Title>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginBottom: 10 }}
          onPress={() => navigation.navigate("ClientHome")}
        >
          <Image
            style={{
              width: 180,
              height: 180,
              alignSelf: "center",
              borderRadius: 5,
            }}
            source={require("../assets/images/retailer/1.png")}
          ></Image>

          <Title style={{alignSelf: "center", color: "purple"}}>LOGIN AS CLIENT</Title>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppHome;
