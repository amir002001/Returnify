import { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, List, Portal, Paragraph, Dialog, Provider } from "react-native-paper";
import { ReturnListProps } from "../NavigationTypes";

//Author: Burhan

const ReturnListScreen = ({ navigation }: ReturnListProps) => {
  //states
  const [visible, setVisible] = useState(false);
  const [returns, setReturns] = useState([]);

  // const retailerID = "EA43C98E-94AD-4442-890D-6B0B2B428F75";

  //fetch api to our endpoint
  //Retailer ID = EA43C98E-94AD-4442-890D-6B0B2B428F75	

  // useEffect(() => {
  //   fetch(`http://localhost:5200/api/Retailer/getAllReturns/EA43C98E-94AD-4442-890D-6B0B2B428F75`, {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((response) => setReturns(response))
  //     .catch((e) => console.log(e));
  //   //string interpolation
  //   // .then((r) => console.log(r))
  // }, []);

  useEffect(() => {
    fetch("http://localhost:5200/api/Retailer/getAllReturns/EA43C98E-94AD-4442-890D-6B0B2B428F75", {
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


                  left={() => (
                    <Avatar.Image
                      source={require(`../../assets/images/retailer/${index + 1}.png`)}
                    />)}
                  right={() => <List.Icon icon="information" />}
                />
              )
            })
          ) : (<Text>Loading...</Text>)}


        </List.Section>

        <Button style={styles.btn} mode="contained" onPress={() => { setVisible(true) }}>Show Dialog</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={() => { setVisible(false) }}>
            <Dialog.Title onPressIn={() => { }} onPressOut={() => { }} >No returns</Dialog.Title>
            <Dialog.Content>
              <Paragraph>There are no returns to display</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => { setVisible(false) }}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
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
