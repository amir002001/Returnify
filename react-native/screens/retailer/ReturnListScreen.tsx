import { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, List, Portal, Paragraph, Dialog, Provider } from "react-native-paper";
import { ReturnListProps } from "../NavigationTypes";

//Author: Burhan

const ReturnListScreen = ({ navigation }: ReturnListProps) => {
  //states
  const [returns, setReturns] = useState([]);
  const imageComps: any = {
    1: (
      <Avatar.Image
        source={require(`../../assets/images/retailer/1.png`)}
      />
    ),
    2: (
      <Avatar.Image
        source={require(`../../assets/images/retailer/2.png`)}
      />
    ),
    3: (
      <Avatar.Image
        source={require(`../../assets/images/retailer/3.png`)}
      />
    ),
    4: (
      <Avatar.Image
        source={require(`../../assets/images/retailer/4.png`)}
      />
    ),
  };

  useEffect(() => {
    fetch("http://20.70.34.47/api/Retailer/getAllReturns/EA43C98E-94AD-4442-890D-6B0B2B428F75", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => { setReturns(response); })
      .catch((e) => console.log(e));
  }, []);
  return (
    <Provider>
      <View>
        <List.Section>
          {returns.length !== 0 ? (
            returns.map((value: any, index) => {
              return (
                <List.Item
                  key={index}
                  //return item
                  onPress={() =>

                    //navigate to the full detail of the return
                    navigation.navigate("ReturnItem", {
                      id: value.returnId
                    })
                  }
                  title={<Text style={{ color: "#000000" }}>{value.clientName}</Text>}
                  description={<Text style={{ color: "#000000" }}>{value.status}</Text>}

                  left={() => (imageComps[index + 1])}
                  right={() => <List.Icon icon="information" />}
                />
              )
            })
          ) : (<Text>Loading...</Text>)}


        </List.Section>
      </View >
    </Provider >
  );
};

const styles = StyleSheet.create({
  btn: {
    margin: 10
  }
});

export default ReturnListScreen;
