import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TextInput } from "react-native";
import {
  Avatar,
  Card,
  List,
  Paragraph,
  Title,
  Button,
} from "react-native-paper";
import { ReturnItemProps } from "../NavigationTypes";

//Author: Mike

const ReturnItemScreen = ({ navigation, route }: ReturnItemProps) => {
  const [visible, setVisible] = useState(false);
  const [orderNumber, setOrderNumber] = useState("12345");
  return (
    <View>
        <Title style={{ margin: 5, marginTop: 15, marginLeft: 15}}>Find Your Orders</Title>
        <View>

        </View>
        <View
            style={style.touchableOpacity}
          >
            <Title style={{ margin: 5, marginTop: 15, marginLeft: 15}}>Filter Orders:</Title>
            <View style={style.textContainer}>
            <View style={{width: 'auto'}}>
            <Text style={{borderRadius:10, margin: 5, marginTop: 15, marginLeft: 10}}>Price Range:</Text>
                <View style={{marginTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
                    <TextInput style={{backgroundColor: '#d9d9d9', borderRadius:10, width: "40%",padding: 10, margin: 5, marginTop: 7}}>From</TextInput>
                    <Text style={{borderRadius:10, margin: 5, marginTop: 15}}>-</Text>
                    <TextInput style={{backgroundColor: '#d9d9d9', borderRadius:10, width: "40%",padding: 10, margin: 5, marginTop: 7}}>To</TextInput>
                </View>
                <Text style={{borderRadius:10,padding: 10, margin: 5, marginTop: 15, marginLeft: 0}}>From Store:</Text>
                <TextInput style={{backgroundColor: '#d9d9d9', borderRadius:10, width: "97%",padding: 10, margin: 5, marginTop: 7}}>Enter Store Name</TextInput>

                <Text style={{borderRadius:10,padding: 10, margin: 5, marginTop: 15, marginLeft: 0}}>Enter Date:</Text>
                <TextInput style={{backgroundColor: '#d9d9d9', borderRadius:10, width: "97%",padding: 10, margin: 5, marginTop: 7}}>MM/DD/YYYY</TextInput>

                </View>
               
            </View>
            <Button onPress={() =>
              navigation.navigate("ClientHome")
            }style={{padding: 20}}>Filter</Button>
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
        height:"auto",
        minHeight: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
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
    }
  });

export default ReturnItemScreen