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
    fetch(`http://20.70.34.47/api/Retailer/getReturnsByReturnId/${route.params.id}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((response) => {
        setReturnItems(response);
      })
      .catch((e) => console.log(e));


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
      <Text style={styles.subheading}>{new Date(returnItems.returnDate).toDateString()}</Text>

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
                    source={require(`../../assets/images/retailer/bag.jpeg`)}
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
          `http://20.70.34.47/api/Retailer/updateReturnStatus/${returnItems.returnId}?returnStatus=Arrived`,
          {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
          .then(response => { response.status })
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