import React, { useState } from "react";
import { Image } from "react-native";
import {
  Avatar,
  Card,
  List,
  Paragraph,
  Title,
  Button,
} from "react-native-paper";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { ReturnItemProps } from "../../types";

const ReturnItemScreen = ({ navigation, route }: ReturnItemProps) => {
  const [visible, setVisible] = useState(false);
  const [orderNumber, setOrderNumber] = useState("12345");
  return (
    <View>
      <Card>
        <Card.Content>
          <Title>{route.params.name} Return</Title>
          <Paragraph>{route.params.status}</Paragraph>
          <Paragraph>Order {/*TODO*/}</Paragraph>
        </Card.Content>
      </Card>

      <Text>Date of return:</Text>
      <Text>December 23, 2021</Text>

      <List.Section>
        {/* TODO <List.Subheader>Items in return:</List.Subheader> */}
        <List.Item
          onPress={() =>
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
              source={require(`../../assets/images/retailer/tshirt.jpeg`) /* TODO change for normal image */} 
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

      <Button onPress={() => navigation.navigate("AppHome")}>
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