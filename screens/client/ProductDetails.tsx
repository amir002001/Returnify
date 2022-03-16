import React, { useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
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
        <Title style={{ margin: 5, marginTop: 15, marginLeft: 15}}>Order Summary</Title>
        <View>

        </View>
        <View
            style={style.touchableOpacity}
          >
            <Title style={{ margin: 5, marginTop: 15, marginLeft: 15}}>Overview:</Title>
            <View style={style.textContainer}>
            <View style={{width: 'auto'}}>
                <Title>H&M</Title>
                <Text style={{fontWeight: 'bold'}}>Total: $73.59</Text>
                <Text>Purchased: March 12th 2022</Text>
                <Text style={{ marginBottom: 20}}>2 items</Text>
                </View>
                    <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />      
            </View>
            <Title style={{ margin: 5, marginTop: 15, marginLeft: 15}}>Items:</Title>
            <View style={style.textContainer}>
                <View style={{ margin: 5, marginTop: 15, marginBottom: 20, flexDirection: "row"}}>
                    <Image
                        source={require("../../assets/images/retailer/tshirt.jpeg")}
                        style={{width: 70, height: 70, marginRight: 20, borderRadius: 100, shadowOffset: {width: 0, height: 1},shadowOpacity: 0.80,shadowRadius: 4.84}}
                    />
                    <View style={{width: 'auto'}}>
                        <Text>Crewneck T-Shirt</Text>
                        <Text>Size: M</Text>
                        <Text>Order Number: 12363632718</Text>
                        <Text>$13.59</Text>
                    </View>
                </View>
                     <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    /> 
                <View style={{ margin: 5, marginTop: 15, flexDirection: "row"}}>
                    <Image
                        source={require("../../assets/images/retailer/pants.jpeg")}
                        style={{width: 70, height: 70, marginRight: 20, borderRadius: 100, shadowOffset: {width: 0, height: 1},shadowOpacity: 0.80,shadowRadius: 4.84}}
                    />
                    <View style={{width: 'auto'}}>
                        <Text>Black Jeans</Text>
                        <Text>Size: M</Text>
                        <Text>Order Number: 12363632718</Text>
                        <Text>$53.59</Text>
                    </View>
                </View>
                     
            </View>
            <Button style={{padding: 20}}>Make a Return</Button>
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