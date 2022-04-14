import React, { Component, useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  List,
  Paragraph,
  Title,
} from "react-native-paper";
import Icon from "react-native-paper/lib/typescript/components/Icon";
import { ItemDetailProps } from "../NavigationTypes";

//Author: Burhan

const ItemDetailScreen = ({ navigation, route }: ItemDetailProps) => {

  const [item, setItems]: any = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5200/api/Retailer/getItemById/${route.params.id}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((response) => setItems(response))
      .catch((e) => console.log(e));

    //.then((response) => console.log(response.items[0]))


  }, []);


  return (
    <View>
      <Card>
        <Card.Content>
          <Title>{item.name}</Title>
          <Paragraph style={styles.subheading}>Product Information:</Paragraph>
          <Text style={styles.itemInfo}>SKU: {item.sku}</Text>
          <Text style={styles.itemInfo}>Style Number: {item.styleNumber}</Text>
          <Text style={styles.itemInfo}>Manufacture Date: {new Date(item.manufacturedDate).toDateString()}</Text>

          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <Image
              style={{ margin: 30, width: 300, height: 300 }}
              source={require(`../../assets/images/retailer/${item.images[0].path}.jpeg`)}
            />
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  subheading: {
    fontSize: 18,
    margin: 0,
    fontWeight: "bold"
  },
  itemInfo: {
    fontSize: 18,
    margin: 0
  }
});

export default ItemDetailScreen