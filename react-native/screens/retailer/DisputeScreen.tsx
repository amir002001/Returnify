import React, { Component, useState } from "react";
import { Image, StyleSheet, View, TextInput } from "react-native";
import { Card, Paragraph, Title, Button } from "react-native-paper";
import { DisputeProps } from "../NavigationTypes";

//Author: Burhan

const DisputeScreen = ({ navigation, route }: DisputeProps) => {
  //states
  const [orderNumber, setOrderNumber] = useState(route.params.orderNumber);
  const [text, setText] = useState("");

  return (
    <View>
      <Card>
        <Card.Content>
          <Title>Dispute for order {orderNumber}</Title>
          <Paragraph>Please provide a reasoning for your dispute:</Paragraph>
        </Card.Content>
      </Card>

      <TextInput multiline
        numberOfLines={4}
        style={styles.input}
        placeholder="Enter dispute details">
      </TextInput>

      <Button mode="contained" onPress={() => navigation.navigate("AppHome")}>
        Submit Dispute
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: "70%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default DisputeScreen;
