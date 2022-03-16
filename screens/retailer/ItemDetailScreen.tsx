import React, { Component, useState } from "react";
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
  return (
    <View>
      <Card>
        <Card.Content>
          <Title>{route.params.clothingName}</Title>
          <Paragraph style={styles.subheading}>Product Information:</Paragraph>
          <Text style={styles.itemInfo}>SKU: 156897586</Text>
          <Text style={styles.itemInfo}>Style Number: 9938</Text>
          <Text style={styles.itemInfo}>Manufacture Date: Novemeber 12, 2020</Text>

          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            {route.params.clothingImage}
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