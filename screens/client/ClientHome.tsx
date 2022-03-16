import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { ClientHomeProps } from "../NavigationTypes";


const ClientHome = ({ navigation }: ClientHomeProps) => {
  return (
    <View>
      {/* <Button onPress={() => navigation.navigate("AppHome")}>Go back</Button> */}
      <View style={{ margin: 5, marginTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
       <Title style={{ margin: 5}}> Your Orders</Title>
       <Button>Filter Orders</Button>  
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, height: '100%'}}>
          <TouchableHighlight
            style={style.touchableOpacity}
            onPress={() =>
              navigation.navigate("OrderDetails", {
                name: "Jim Jones",
                orderNo: "#33233",
                status: (
                  <Text style={{ color: "#FEBE00" }}>Status: Picked up</Text>
                ),
              })
            }
          >
            <View style={style.textContainer}>
                <Image
                    source={require("../../assets/images/retailer/tshirt.jpeg")}
                    style={{width: 70, height: 70, marginRight: 20, borderRadius: '100%', shadowOffset: {width: 0, height: 1},shadowOpacity: 0.80,shadowRadius: 4.84}}
                />
                <View style={{width: 'auto'}}>
                    <Title>H&M</Title>
                    <Text style={{fontWeight: 'bold'}}>Total: $73.59</Text>
                    <Text>Purchased: March 12th 2022</Text>
                    <Text>3 items</Text>
                  </View>
            </View>
            </TouchableHighlight>
          <TouchableHighlight
            style={style.touchableOpacity}
            onPress={() =>
              navigation.navigate("ReturnItem", {
                name: "Jim Jones",
                orderNo: "#33233",
                status: (
                  <Text style={{ color: "#FEBE00" }}>Status: Picked up</Text>
                ),
              })
            }
          >
            <View style={style.textContainer}>
                <Image
                    source={require("../../assets/images/retailer/pants.jpeg")}
                    style={{width: 70, height: 70, marginRight: 20, borderRadius: '100%', shadowOffset: {width: 0, height: 1},shadowOpacity: 0.80,shadowRadius: 4.84}}
                />
                <View style={{width: 'auto'}}>
                    <Title>H&M</Title>
                    <Text style={{fontWeight: 'bold'}}>Total: $73.59</Text>
                    <Text>Purchased: March 12th 2022</Text>
                    <Text>3 items</Text>
                  </View>
            </View>
            </TouchableHighlight>
          <TouchableHighlight
            style={style.touchableOpacity}
            onPress={() =>
              navigation.navigate("ReturnItem", {
                name: "Jim Jones",
                orderNo: "#33233",
                status: (
                  <Text style={{ color: "#FEBE00" }}>Status: Picked up</Text>
                ),
              })
            }
          >
            <View style={style.textContainer}>
                <Image
                    source={require("../../assets/images/retailer/tshirt.jpeg")}
                    style={{width: 70, height: 70, marginRight: 20, borderRadius: '100%', shadowOffset: {width: 0, height: 1},shadowOpacity: 0.80,shadowRadius: 4.84}}
                />
                <View style={{width: 'auto'}}>
                    <Title>H&M</Title>
                    <Text style={{fontWeight: 'bold'}}>Total: $73.59</Text>
                    <Text>Purchased: March 12th 2022</Text>
                    <Text>3 items</Text>
                  </View>
            </View>
            </TouchableHighlight>
       
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
