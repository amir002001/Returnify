import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, List } from "react-native-paper";
import { ReturnListProps } from "../../types";

const ReturnListScreen = ({ navigation }: ReturnListProps) => {
  return (
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
    </View>
  );
};

export default ReturnListScreen;
