import { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, List, Portal, Paragraph, Dialog, Provider } from "react-native-paper";
import { ReturnListProps } from "../NavigationTypes";

//Author: Burhan

const ReturnListScreen = ({ navigation }: ReturnListProps) => {
  //states
  const [visible, setVisible] = useState(false);


  return (
    <Provider>
      <View>
        <List.Section>
          <List.Item

            //return item
            onPress={() =>

              //navigate to the full detail of the return
              navigation.navigate("ReturnItem", {
                name: "Bob Jones",
                orderNo: "#33233",
                status: (
                  <Text style={{ color: "#00DD00" }}>Status: Delivered</Text>
                ),
              })
            }
            title="Bob's Return"
            description={
              <Text style={{ color: "#00DD00" }}>Status: Delivered</Text>
            }

            left={() => (
              <Avatar.Image
                source={require(`../../assets/images/retailer/1.png`)}
              />)}
            right={() => <List.Icon icon="information" />}
          />
          <List.Item
            onPress={() =>
              navigation.navigate("ReturnItem", {
                name: "Jim Jones",
                orderNo: "#33233",
                status: (
                  <Text style={{ color: "#FEBE00" }}>Status: Picked up</Text>
                ),
              })
            }
            title="Jim's Return"
            description={
              <Text style={{ color: "#FEBE00" }}>Status: Picked up</Text>
            }
            left={() => (
              <Avatar.Image
                source={require(`../../assets/images/retailer/2.png`)}
              />)}
            right={() => <List.Icon icon="information" />}
          />
          <List.Item
            onPress={() =>
              navigation.navigate("ReturnItem", {
                name: "Jan Jones",
                orderNo: "#33233",
                status: (
                  <Text style={{ color: "#FF0000" }}>Status: In transit</Text>
                ),
              })
            }
            title="Jan's Return"
            description={
              <Text style={{ color: "#FF0000" }}>Status: In transit</Text>
            }
            left={() => (
              <Avatar.Image
                source={require(`../../assets/images/retailer/3.png`)}
              />)}
            right={() => <List.Icon icon="information" />}
          />
          <List.Item
            onPress={() =>
              navigation.navigate("ReturnItem", {
                name: "Alex Jones",
                orderNo: "#33233",
                status: (
                  <Text style={{ color: "#FEBE00" }}>Status: Picked up</Text>
                ),
              })
            }
            title="Alex's Return"
            description={
              <Text style={{ color: "#FEBE00" }}>Status: Picked up</Text>
            }
            left={() => (
              <Avatar.Image
                source={require(`../../assets/images/retailer/4.png`)}
              />)}
            right={() => <List.Icon icon="information" />}
          />
          <List.Item
            onPress={() =>
              navigation.navigate("ReturnItem", {
                name: "Ron Jones",
                orderNo: "#33233",
                status: (
                  <Text style={{ color: "#FF0000" }}>Status: In transit</Text>
                ),
              })
            }
            title="Ron's Return"
            description={
              <Text style={{ color: "#FF0000" }}>Status: In transit</Text>
            }
            left={() => (
              <Avatar.Image
                source={require(`../../assets/images/retailer/5.png`)}
              />)}
            right={() => <List.Icon icon="information" />}
          />
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
    </Provider>
  );
};

const styles = StyleSheet.create({
  btn: {
    margin: 10
  }
});

export default ReturnListScreen;
