import React, { Component, useState, useEffect } from "react";
import { Image, StyleSheet, View, TextInput } from "react-native";
import { Card, Paragraph, Title, Button } from "react-native-paper";
import { DisputeProps } from "../NavigationTypes";

//Author: Burhan

const DisputeScreen = ({ navigation, route }: DisputeProps) => {
  //states
  const [returnId, setReturnId] = useState(route.params.id);
  const [dispute, setDispute]: any = useState("");
  const [currentDisputeReason, setCurrentDisputeReason]: any = useState("");

  useEffect(() => {
    fetch(`http://20.70.34.47/api/Retailer/getReturnsByReturnId/${route.params.id}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((response) => {
        setCurrentDisputeReason(response.disputeReason);
        console.log(response)
      })
      .catch((e) => console.log(e));


  }, []);

  return (
    <View>
      <Card>
        <Card.Content>
          <Title>Dispute for order {returnId}</Title>
          <Paragraph>Please provide a reasoning for your dispute:</Paragraph>
        </Card.Content>
      </Card>

      <TextInput multiline
        numberOfLines={4}
        style={styles.input}
        placeholder={currentDisputeReason}
        onChangeText={setDispute}
      >

      </TextInput>

      <Button mode="contained" onPress={() => {
        navigation.navigate("AppHome")

        fetch(
          `http://20.70.34.47/api/Retailer/updateDisputeReason/${returnId}?userDisputeReason=${dispute}`,
          {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
          .then(response => response.status)
          .catch((e) => console.log(e));
      }}>
        Submit Dispute
      </Button>
    </View >
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
