import { Text, View } from "react-native";
import { Button, IconButton, Title } from "react-native-paper";
import { AssessmentResultProps } from "../NavigationTypes";

const AssessmentResultScreen = ({ navigation, route }: AssessmentResultProps) => {
  return (
    <View>
      <Title style={{textAlign: "center"}}>You Passed. Congrats!</Title>
      <Title style={{color: "green", textAlign: "center"}}>25/30</Title>
      <IconButton size={50} color="purple" style={{alignSelf:"center"}} icon={"emoticon-cool-outline"}></IconButton>
      <Button onPress={()=> {navigation.navigate("AppHome")}}>Go back</Button>
    </View>
  );
};

export default AssessmentResultScreen;
