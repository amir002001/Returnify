import { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, TextInput, Image, Modal, Alert, Pressable } from "react-native";
import { Button, Title } from "react-native-paper";
import { ClientHomeProps } from "../NavigationTypes";

//Author: Mike

const ClientHome = ({ navigation, route }: ClientHomeProps) => {

  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders]:any = useState();
  const [modalVisible, setModalVisible] = useState(true);
  const [minRange, setMinRange]:any = useState("0");
  const [maxRange, setMaxRange]:any = useState("10000000");
  const [storeName, setStoreName]:any = useState("HM");
  const [returnDate, setReturnDate]:any = useState("04/07/2022");

  useEffect(() => {
    fetch("http://localhost:5200/api/Client/getAllClientOrders/D6024DF5-411F-48D1-8A47-8D17C05C8D45", {
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
       <Button onPress={() => setModalVisible(true)}>
          Filter Orders
      </Button>  
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, height: '100%'}}>
      
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
            <Title style={{ margin: 5, marginTop: 15, marginLeft: 15}}>Filter Orders:</Title>
            <View style={style.textContainer}>
            <View style={{width: 'auto', margin:"20px"}}>
            <Text style={{borderRadius:10, margin: 5, marginTop: 15, marginLeft: 10}}>Price Range:</Text>
                <View style={{marginTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
                    <TextInput
                      placeholder="From Price"
                      value={minRange ? minRange : ""}
                      keyboardType='numeric'
                      onChangeText={setMinRange}
                      style={{backgroundColor: '#d9d9d9', borderRadius:10, width: "40%",padding: 10, margin: 5, marginTop: 7}}/>

                    <Text style={{borderRadius:10, margin: 5, marginTop: 15}}>-</Text>

                    <TextInput
                      placeholder="To Price"
                      value={maxRange ? maxRange : ""}
                      keyboardType='numeric'
                      onChangeText={setMaxRange}
                      style={{backgroundColor: '#d9d9d9', borderRadius:10, width: "40%",padding: 10, margin: 5, marginTop: 7}}/>

                </View>
                <Text style={{borderRadius:10,padding: 10, margin: 5, marginTop: 15, marginLeft: 0}}>From Store:</Text>
                <TextInput
                  placeholder="Enter Store Name"
                  value={storeName ? storeName : ""}
                  onChangeText={setStoreName}
                  style={{backgroundColor: '#d9d9d9', borderRadius:10, width: "97%",padding: 10, margin: 5, marginTop: 7}}/>

                <Text style={{borderRadius:10,padding: 10, margin: 5, marginTop: 15, marginLeft: 0}}>Enter Date:</Text>
                <TextInput
                  placeholder="DD/MM/YYYY"
                  value={returnDate ? returnDate : ""}
                  onChangeText={setReturnDate}
                  style={{backgroundColor: '#d9d9d9', borderRadius:10, width: "97%",padding: 10, margin: 5, marginTop: 7}}/>
                </View>
               
            </View>
            <Button onPress={() =>

              fetch(`http://localhost:5200/api/Client/getOrdersByFilter/D6024DF5-411F-48D1-8A47-8D17C05C8D45?&startRange=${minRange}&endRange=${maxRange}&storeName=${storeName}&date=${returnDate}`, {
                method: "GET",
              })
                .then((response) => response.json())
                .then((response) =>
                {
                  setOrders(response);
                  console.log(response);
                  setModalVisible(false)
                })
                .catch((e) => console.log(e))

            }style={{padding: 20}}>Filter</Button>

      </Modal>

      {
      orders.length !== 0 ? (
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
                            <Text style={{fontWeight: 'bold', textAlign: "left"}}>${value.total}</Text>
                            <Text style={{textAlign: "left"}}>Purchased: {value.purchaseDate}</Text>
                            <Text style={{textAlign: "left"}}>{value.items.length} Items</Text>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
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
      flexDirection: "row",
      justifyContent: "center"
  }
});

export default ClientHome;
