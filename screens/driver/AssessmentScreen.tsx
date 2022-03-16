import { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, RadioButton, Title } from "react-native-paper";
import { AssessmentProps } from "../NavigationTypes";

const AssessmentScreen = ({ navigation, route }: AssessmentProps) => {
  const [value, setValue] = useState("first");

  return (
    <View>
      <Title style={{textAlign: "center"}}>What does the picture show</Title>
      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/id/237/200/300" }}
        ></Image>
      </View>
      <RadioButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        <RadioButton.Item label="A piano" value="first" />
        <RadioButton.Item label="A dog" value="second" />
        <RadioButton.Item label="God of Agile" value="third" />
      </RadioButton.Group>
      <Button
        onPress={() => {
          navigation.navigate("AssessmentFeedback");
        }}
      >
        Submit Assessment
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "50%",
    height: 300,
  },
});

export default AssessmentScreen;
