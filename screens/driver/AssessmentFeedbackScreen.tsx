import { Image, StyleSheet, Text, View } from "react-native";
import { Button, IconButton, RadioButton, Title } from "react-native-paper";
import { AssessmentFeedbackProps } from "../NavigationTypes";

const AssessmentFeedbackScreen = ({
  navigation,
  route,
}: AssessmentFeedbackProps) => {
  return (
    <View>
      <Title style={{textAlign: "center"}}>What does the picture show</Title>
      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/id/237/200/300" }}
        ></Image>
      </View>
      <RadioButton.Group onValueChange={() => {}} value={"first"}>
        <View style={styles.answer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconButton icon={"close"}></IconButton>
            <Text>Dog</Text>
          </View>
          <RadioButton.Item
            style={styles.radio}
            label=""
            value="first"
            disabled
          />
        </View>
        <View style={styles.answer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconButton icon={"check"}></IconButton>
            <Text>Piano</Text>
          </View>
          <RadioButton.Item
            style={styles.radio}
            label=""
            value="second"
            disabled
          />
        </View>
        <View style={styles.answer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconButton style={{opacity: 0}} icon={"check"}></IconButton>
            <Text>God of Agile</Text>
          </View>
          <RadioButton.Item label="" value="third" disabled />
        </View>
      </RadioButton.Group>
      <Button
        onPress={() => {
          navigation.navigate("AssessmentResult");
        }}
      >
        Assessment Result
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "50%",
    height: 300,
  },
  answer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radio: {
    alignSelf: "flex-end",
    flexGrow: 1,
  },
});

export default AssessmentFeedbackScreen;
