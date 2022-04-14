import { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Image } from "react-native";
import { Button, Title } from "react-native-paper";
import { ClientHomeProps } from "../NavigationTypes";

//Author: Mike

const ClientHome = ({ navigation }: ClientHomeProps) => {


  const [visible, setVisible] = useState(false);
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5200/api/Client/getAllClientOrders/2C09F1AA-6A0A-4B66-A40B-ED7F45FC67B1", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => { setOrders(response); console.log(response)})
      .catch((e) => console.log(e));
  }, []);

  return (
    <View>
      <View style={{ margin: 5, marginTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
       <Title style={{ margin: 5}}> Your Orders</Title>
       <Button onPress={() => navigation.navigate("FilterOrders")}>
          Filter Orders
      </Button>  
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, height: '100%'}}>
          
      {orders.length !== 0 ? (
            orders.map((value: any, index) => {
              return (
                <TouchableHighlight
                    key={index}
                    style={style.touchableOpacity}
                    //navigate to the full detail of the order
                    onPress={() =>
                      navigation.navigate("OrderDetails", {
                        retailer: value.retailer.name,
                        total: value.total,
                        purchaseDate: value.purchaseDate,
                        items: value.items
                      })
                    }
                  >
                    <View style={style.textContainer}>
                        <Image
                            source={require("../../assets/images/retailer/tshirt.jpeg")}
                            style={{width: 70, height: 70, marginRight: 20, borderRadius: 100, shadowOffset: {width: 0, height: 1},shadowOpacity: 0.80,shadowRadius: 4.84}}
                        />
                        <View style={{width: 'auto'}}>
                            <Title>{value.retailer.name}</Title>
                            <Text style={{fontWeight: 'bold'}}>${value.total}</Text>
                            <Text>Purchased: {value.purchaseDate}</Text>
                            <Text>{value.items.length} Items</Text>
                          </View>
                    </View>
                    </TouchableHighlight>
              )
            })
          ) : (<Text>Loading...</Text>)}

       
      </ScrollView>
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
      flexDirection: "row"
  }
});

export default ClientHome;
