import { Text, View } from "react-native"
import { Button } from "react-native-paper"
import { ModuleProps } from "../NavigationTypes"

const ModuleScreen = ({navigation, route}: ModuleProps) => {

    return (
        <View>
            <Text>You've already completed this module!</Text>
            <Button onPress={()=> {navigation.navigate("Assessment")}}>Take Assessment</Button>
        </View>
    )
}

export default ModuleScreen