
import { Button } from "react-native-paper";
import { DriverHomeProps, RootStackParamList } from "../../types";
import { useTailwind } from "tailwind-rn";
import { Image, Text, View } from "react-native";





const DriverHome = ({navigation}: DriverHomeProps) => {
  const tailwind = useTailwind()
  return (
    <View>
      <Text>Driver Dashboard</Text>
      <Image source={{uri:"https://picsum.photos/200", width:200,height:200 }}/>
      <Button>
        Start
      </Button>
      <Button onPress={() => navigation.navigate("AppHome")}>
        Go back
      </Button>
    </View>
  );
};

export default DriverHome;
