import React, { useState } from "react";
import { Image, Text, View } from "react-native";
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
          <Title>{route.params.name} Return</Title>
          <Paragraph>{route.params.status}</Paragraph>
          <Paragraph>Order {orderNumber}</Paragraph>
        </Card.Content>
      </Card>

      <Text>Date of return:</Text>
      <Text>December 23, 2021</Text>

      <List.Section>
        <List.Subheader onPressOut={() => { }} onPressIn={() => { }}>Items in return:</List.Subheader>
        <List.Item
          onPress={() =>
            //navigates to full details of an item
            navigation.navigate("ItemDetail", {
              clothingName: "Crew T-Shirt",
              clothingImage: (
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require(`../../assets/images/retailer/tshirt.jpeg`)}
                />
              ),
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
        <List.Item
          onPress={() =>
            navigation.navigate("ItemDetail", {
              clothingName: "Dress Pants",
              clothingImage: (
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require(`../../assets/images/retailer/pants.jpeg`)}
                />
              ),
            })
          }
          title="Dress Pants"
          description={<Text>SKU: 986654789</Text>}
          left={() => (
            <Avatar.Image
              source={require(`../../assets/images/retailer/pants.jpeg`)}
            />
          )}
          right={() => <List.Icon icon="information" />}
        />
      </List.Section>

      <Text>Reason for return:</Text>
      <Text style={{ fontStyle: "italic" }}>
        "The clothes did not fit my body shape. The clothes were too tight."
      </Text>

      <Text>Expected time arrival:</Text>
      <Text style={{ fontWeight: "bold" }}>
        2:55 PM Thursday Feburary 10, 2022
      </Text>

      <Button onPress={() => navigation.navigate("ReturnList")}>
        Confirm Return
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("Dispute", { orderNumber });
        }}
      >
        Open Disupte
      </Button>
    </View>
  );
};

export default ReturnItemScreen