import { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, List, Portal, Paragraph, Dialog, Provider } from "react-native-paper";
import { ReturnListProps } from "../NavigationTypes";

const ReturnListScreen = ({ navigation }: ReturnListProps) => {

  const [visible, setVisible] = useState(false);


  return (
    <Provider>
      <View>
        <List.Section>
          <List.Item
            onPress={() =>
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
            left={() => <List.Icon icon="account-circle" />}
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
            left={() => <List.Icon color="#000" icon="account-circle" />}
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
            left={() => <List.Icon color="#000" icon="account-circle" />}
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
            left={() => <List.Icon color="#000" icon="account-circle" />}
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
            left={() => <List.Icon color="#000" icon="account-circle" />}
            right={() => <List.Icon icon="information" />}
          />
        </List.Section>

        <Button onPress={() => navigation.navigate("AppHome")}>Go back</Button>


        <Button onPress={() => { setVisible(true) }}>Show Dialog</Button>
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

export default ReturnListScreen;
