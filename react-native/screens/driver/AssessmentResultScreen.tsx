import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button, IconButton, Title } from "react-native-paper";
import { AssessmentResultProps } from "../NavigationTypes";

// Screen to show assessment result to user

const AssessmentResultScreen = ({ navigation, route }: AssessmentResultProps) => {
  const [assessment, setAssessment]: any = useState();
  useEffect(() => {
    fetch(
      `http://20.70.34.47/api/Driver/Assessment/${route.params.assessmentId}`,
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
      <Title style={{textAlign: "center"}}>You Passed. Congrats!</Title>
      <Title style={{color: "green", textAlign: "center"}}>{assessment? assessment.score: "loading..."}</Title>
      <IconButton size={50} color="purple" style={{alignSelf:"center"}} icon={"emoticon-cool-outline"}></IconButton>
      <Button onPress={()=> {navigation.navigate("AppHome")}}>Go back</Button>
    </View>
  );
};

export default AssessmentResultScreen;
