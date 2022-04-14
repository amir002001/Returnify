import { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import {
  Avatar,
  Card,
  List,
  Paragraph,
  Title,
  Button,
} from "react-native-paper";
import { ReturnItemProps } from "../NavigationTypes";

//Author: Burhan

const ReturnItemScreen = ({ navigation, route }: ReturnItemProps) => {
  //states

  const [returnItems, setReturnItems]: any = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5200/api/Retailer/getReturnsByReturnId/${route.params.id}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((response) => setReturnItems(response))
      .catch((e) => console.log(e));

    //.then((response) => console.log(response.items[0]))


  }, []);

  return (
    <View>
      <Card>
        <Card.Content>
          <Title>Return</Title>
          <Paragraph style={{ fontSize: 18 }}>Order status: {returnItems.status}</Paragraph>
        </Card.Content>
      </Card>

      <Text style={styles.header} >Date of return: </Text>
      <Text style={styles.subheading}>{new Date(returnItems.ReturnDate).toDateString()}</Text>

      <List.Section>
        <List.Subheader style={styles.listSubheading} onPressOut={() => { }} onPressIn={() => { }}>Items in return:</List.Subheader>
        {returnItems.length !== 0 ? (
          returnItems.items.map((value: any, index: any) => {
            return (
              <List.Item
                key={index}
                onPress={() =>
                  //navigates to full details of an item
                  navigation.navigate("ItemDetail", {
                    id: value.id,
                    imagePath: value.images[0].path
                  })
                }
                title={value.name}
                description={value.sku}
                left={() => (
                  <Avatar.Image
                    source={require(`../../assets/images/retailer/${value.images[0].path}.jpeg`)}
                  />
                )}
                right={() => <List.Icon icon="information" />}
              />
            )
          })
        ) : (
          <Text>Loading...</Text>
        )}


      </List.Section>

      <Text style={styles.header}>Expected arrival time:</Text>
      <Text style={styles.date}>
        {new Date(returnItems.estimatedTime).toUTCString()}
      </Text>

      <Button style={styles.btn} mode="contained" onPress={() => {
        fetch(
          `http://localhost:5200/api/Retailer/UpdateReturnStatus/${returnItems.returnId}?returnStatus=Picked%20Up`,
          {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
          .then(response => response.status)
          .then()
          .catch((e) => console.log(e));

        navigation.navigate("ReturnList")
      }

      }>
        Confirm Return
      </Button>

      <Button style={styles.btn} mode="contained"
        onPress={() => {
          navigation.navigate("Dispute", { id: returnItems.returnId });
        }}
      >
        Open Disupte
      </Button>
    </View >
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 5
  },
  subheading: {
    fontSize: 20,
    margin: 5
  },
  listSubheading: {
    fontSize: 20,
    margin: -10
  },
  btn: {
    margin: 10
  },
  quote: {
    fontSize: 20,
    margin: 5,
    fontStyle: 'italic'
  },
  date: {
    fontSize: 20,
    margin: 5,
    fontWeight: "bold"
  }
});

export default ReturnItemScreen