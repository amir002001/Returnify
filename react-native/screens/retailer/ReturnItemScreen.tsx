import React, { useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import {
  Avatar,
  Card,
  List,
  Paragraph,
  Title,
  Button,
} from "react-native-paper";
import { ReturnItemProps } from "../NavigationTypes";

//Author: Burhan

const ReturnItemScreen = ({ navigation, route }: ReturnItemProps) => {
  //states
  const [orderNumber, setOrderNumber] = useState("12345");
  return (
    <View>
      <Card>
        <Card.Content>
          <Title>Return</Title>
          <Paragraph style={{ fontSize: 18 }}>Status</Paragraph>
          <Paragraph style={{ fontSize: 16 }}>Order ddd</Paragraph>
        </Card.Content>
      </Card>

      <Text style={styles.header} >Date of return:</Text>
      <Text style={styles.subheading}>December 23, 2021</Text>

      <List.Section>
        <List.Subheader style={styles.listSubheading} onPressOut={() => { }} onPressIn={() => { }}>Items in return:</List.Subheader>
        <List.Item
          onPress={() =>
            //navigates to full details of an item
            navigation.navigate("ItemDetail", {
              id: "Crew T-Shirt"
            })
          }
          title="Crewneck T-Shirt"
          description={<Text>SKU: 156897586</Text>}
          left={() => (
            <Avatar.Image
              source={require(`../../assets/images/retailer/tshirt.jpeg`)}
            />
          )}
          right={() => <List.Icon icon="information" />}
        />

      </List.Section>

      <Text style={styles.header} >Reason for return:</Text>
      <Text style={styles.quote}>
        "The clothes did not fit my body shape. The clothes were too tight."
      </Text>

      <Text style={styles.header}>Expected time arrival:</Text>
      <Text style={styles.date}>
        2:55 PM Thursday Feburary 10, 2022
      </Text>

      <Button style={styles.btn} mode="contained" onPress={() => navigation.navigate("ReturnList")}>
        Confirm Return
      </Button>

      <Button style={styles.btn} mode="contained"
        onPress={() => {
          navigation.navigate("Dispute", { orderNumber });
        }}
      >
        Open Disupte
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 5
  },
  subheading: {
    fontSize: 20,
    margin: 5
  },
  listSubheading: {
    fontSize: 20,
    margin: -10
  },
  btn: {
    margin: 10
  },
  quote: {
    fontSize: 20,
    margin: 5,
    fontStyle: 'italic'
  },
  date: {
    fontSize: 20,
    margin: 5,
    fontWeight: "bold"
  }
});

export default ReturnItemScreen