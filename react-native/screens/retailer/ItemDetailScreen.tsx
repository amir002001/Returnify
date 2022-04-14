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
  const imageComps: any = {
    hat: (
      <Image
        style={styles.imageStyle}
        source={require(`../../assets/images/retailer/hat.jpeg`)}
      />
    ),
    tshirt: (
      <Image
        style={styles.imageStyle}
        source={require(`../../assets/images/retailer/tshirt.jpeg`)}
      />
    ),
    pants: (
      <Image
        style={styles.imageStyle}
        source={require(`../../assets/images/retailer/pants.jpeg`)}
      />
    ),
  };
  const [item, setItems]: any = useState([]);
  useEffect(() => {
    fetch(`http://20.70.34.47/api/Retailer/getItemById/${route.params.id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setItems(response);
        console.log(route.params);
      })
      .catch((e) => console.log(e));
    //${item.images[0].path}
  }, []);

  return (
    <View>
      <Card>
        <Card.Content>
          <Title>{item.name}</Title>
          <Paragraph style={styles.subheading}>Product Information:</Paragraph>
          <Text style={styles.itemInfo}>SKU: {item.sku}</Text>
          <Text style={styles.itemInfo}>Style Number: {item.styleNumber}</Text>
          <Text style={styles.itemInfo}>
            Manufacture Date: {new Date(item.manufacturedDate).toDateString()}
          </Text>

          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            {
              imageComps[route.params.imagePath]
            }
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
    fontWeight: "bold",
  },
  itemInfo: {
    fontSize: 18,
    margin: 0,
  },
  imageStyle: { margin: 30, width: 300, height: 300 },
});

export default ItemDetailScreen;
