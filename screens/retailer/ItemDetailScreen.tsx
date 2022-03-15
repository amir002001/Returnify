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
import { ItemDetailProps } from "../../types";

const ItemDetailScreen = ({navigation, route}: ItemDetailProps) => {
  return (
    <View>
      <Card>
        <Card.Content>
          <Title>{route.params.clothingName}</Title>
          <Paragraph>Product Information:</Paragraph>
          <Text>SKU: 156897586</Text>
          <Text>Style Number: 9938</Text>
          <Text>Manufacture Date: Novemeber 12, 2020</Text>
          {route.params.clothingImage}
        </Card.Content>
      </Card>
    </View>
  );
};

export default ItemDetailScreen