import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { AssessmentFeedbackProps } from "../NavigationTypes";

const AssessmentFeedbackScreen = ({
  navigation,
  route,
}: AssessmentFeedbackProps) => {
  return (
    <View>
      <Text>Assessment Feedback</Text>
      <Button
        onPress={() => {
          navigation.navigate("AppHome");
        }}
      >
        See results
      </Button>
    </View>
  );
};
export default AssessmentFeedbackScreen;
