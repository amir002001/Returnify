import { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image,
} from "react-native";

import {
  Avatar,
  Card,
  List,
  Paragraph,
  Title,
  Button,
} from "react-native-paper";
import { OrderDetailsProps } from "../NavigationTypes";

//Author: Mike

const ProductDetailsScreen = ({ navigation, route }: OrderDetailsProps) => {
  const [visible, setVisible] = useState(false);
  const [orderNumber, setOrderNumber] = useState("12345");
  const [retailer, setRetailer] = useState(route.params.retailer);
  const [total, setTotal] = useState(route.params.total);
  const [purchaseDate, setPurchaseDate] = useState(route.params.purchaseDate);
  const [items, setItems] = useState(route.params.items);

  return (
    <View>
      <Title style={{ margin: 5, marginTop: 15, marginLeft: 15 }}>
        Order Summary
      </Title>
      <View></View>
      <View style={style.touchableOpacity}>
        <Title style={{ margin: 5, marginTop: 15, marginLeft: 15 }}>
          Overview:
        </Title>
        <View style={style.textContainer}>
          <View style={{ width: "100%" }}>
            <Title style={{ textAlign: "center" }}>{retailer}</Title>
            <Text style={{ fontWeight: "bold" }}>Total: ${total}</Text>
            <Text>Purchased: {purchaseDate}</Text>
            <Text style={{ marginBottom: 20 }}>{items.length} items</Text>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          />
        </View>
        <Title style={{ margin: 5, marginTop: 15, marginLeft: 15 }}>
          Items:
        </Title>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, height: "100%" }}
        >
          {items.length !== 0 ? (
            items.map((value: any, index: any) => {
              return (
                <TouchableHighlight key={index} style={style.touchableOpacity}>
                  <View style={style.textContainer}>
                    <Image
                      source={require("../../assets/images/retailer/tshirt.jpeg")}
                      style={{
                        width: 70,
                        height: 70,
                        marginRight: 20,
                        borderRadius: 100,
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.8,
                        shadowRadius: 4.84,
                      }}
                    />
                    <View style={{ width: "100%" }}>
                      <Title>{value.name}</Title>
                      <Text style={{ fontWeight: "bold", textAlign: "left" }}>
                        ${value.price}
                      </Text>
                      <Text style={{ fontWeight: "bold", textAlign: "left" }}>
                        SKU: {value.sku}
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
              );
            })
          ) : (
            <Text>Loading...</Text>
          )}
          <Button style={{ padding: 20 }}>Make a Return</Button>
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: "white",
    marginLeft: 10,
    marginTop: 15,
    marginRight: 10,
    textAlign: "center",
    borderRadius: 10,
    width: "auto",
    height: "auto",
    minHeight: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.84,
    elevation: 1,
  },
  textContainer: {
    fontFamily: "Arial",
    fontSize: 20,
    padding: 12,
    margin: 0,
    borderRadius: 10,
    marginTop: 0,
    flexDirection: "row",
  },
});

export default ProductDetailsScreen;
