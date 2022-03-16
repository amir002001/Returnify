import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { AssessmentProps } from "../NavigationTypes";

const AssessmentScreen = ({navigation, route}: AssessmentProps) => {

    return (
        <View>
            <Text>Assessment Screen</Text>
            <Button onPress={()=> {navigation.navigate("AssessmentFeedback")}}>Submit Assessment</Button>
        </View>
    )
};

export default AssessmentScreen;
