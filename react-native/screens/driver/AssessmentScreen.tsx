import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, RadioButton, Title } from "react-native-paper";
import { AssessmentProps } from "../NavigationTypes";

// Screen to take assessment from user
const AssessmentScreen = ({ navigation, route }: AssessmentProps) => {
  const [radio, setRadio] = useState("first");
  const [assessment, setAssessment]: any = useState();
  useEffect(() => {
    fetch(
      `http://localhost:5200/api/Driver/Assessment/${route.params.assessmentId}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setAssessment(response);
        console.log(response);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <View>
      {assessment ? (
        <View>
          {assessment.questions.map((value: any, index: any) => {
            return (
              <View>
                <Title style={{ textAlign: "center" }}>
                  What does the picture show
                </Title>
                <View
                  style={{ justifyContent: "center", flexDirection: "row" }}
                >
                  <Image
                    style={styles.image}
                    source={{ uri: "https://picsum.photos/id/237/200/300" }}
                  />
                </View>
                <RadioButton.Group
                  onValueChange={(radio) => setRadio(radio)}
                  value={radio}
                >
                  <RadioButton.Item label="A piano" value="first" />
                  <RadioButton.Item label="A dog" value="second" />
                  <RadioButton.Item label="God of Agile" value="third" />
                </RadioButton.Group>
              </View>
            );
          })}
        </View>
      ) : (
        <Text>loading...</Text>
      )}
      <Button
        onPress={() => {
          navigation.navigate("AssessmentFeedback", {assessmentId: route.params.assessmentId});
          fetch(
            `http://localhost:5200/api/Driver/Assessment/${route.params.assessmentId}`,
            {
              method: "PUT",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({score: 32})
            }
          )
            .then(response => response.status)
            .then()
            .catch((e) => console.log(e));
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
