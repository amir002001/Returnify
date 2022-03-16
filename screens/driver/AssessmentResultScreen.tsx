import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { AssessmentResultProps } from "../NavigationTypes";

const AssessmentResultScreen = ({ navigation, route }: AssessmentResultProps) => {
  return (
    <View>
      <Text>Assessment Result</Text>
      <Button>Go back</Button>
    </View>
  );
};

export default AssessmentResultScreen;
