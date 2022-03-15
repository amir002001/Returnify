import React, { Component, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Card, Paragraph, Title, Button, TextInput } from "react-native-paper";
import { DisputeProps } from "../NavigationTypes";

const DisputeScreen = ({ navigation, route }: DisputeProps) => {
  const [orderNumber, setOrderNumber] = useState(route.params.orderNumber); // TODO: typescript
  const [text, setText] = useState("");

  return (
    <View>
      <Card>
        <Card.Content>
          <Title>Dispute for order {orderNumber}</Title>
          <Paragraph>Please provide a reasoning for your dispute:</Paragraph>
        </Card.Content>
      </Card>
      {/* <TextInput
        mode="outlined"
        label="Dispute reason"
        value={text}
        onChangeText={setText}
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
      /> // TODO FIX*/} 

      <Button onPress={() => navigation.navigate("AppHome")}>
        Submit Dispute
      </Button>
    </View>
  );
};

export default DisputeScreen;
