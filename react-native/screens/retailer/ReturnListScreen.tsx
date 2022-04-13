import { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, List, Portal, Paragraph, Dialog, Provider } from "react-native-paper";
import { ReturnListProps } from "../NavigationTypes";

//Author: Burhan

const ReturnListScreen = ({ navigation }: ReturnListProps) => {
  //states
  const [visible, setVisible] = useState(false);
  const [returns, setReturns] = useState([]);

  const retailerID = "EA43C98E-94AD-4442-890D-6B0B2B428F75";

  //fetch api to our endpoint
  //Retailer ID = EA43C98E-94AD-4442-890D-6B0B2B428F75	

  useEffect(() => {
    fetch(`http://localhost:5200/api/Retailer/getAllReturns/${retailerID}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => setReturns(response))
      .catch(e => console.log(e));
    //string interpolation
  }, []);


  return (
    <Provider>
      <View>
        <List.Section>


          {returns.length === 0 ? (
            returns.map((value: any, index) => {
              return (
                <List.Item

                  //return item
                  onPress={() =>

                    //navigate to the full detail of the return
                    navigation.navigate("ReturnItem", {
                      id: value.id
                    })
                  }
                  title={value.client.Name}
                  description={value.Status}

                  left={() => (
                    <Avatar.Image
                      source={require(`../../assets/images/retailer/1.png`)}
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
