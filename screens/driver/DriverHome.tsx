
import { Button } from "react-native-paper";
import { Text, View } from "../../components/Themed";
import { DriverHomeProps, RootStackParamList } from "../../types";
import { useTailwind } from "tailwind-rn";
import { Image } from "react-native";





const DriverHome = ({navigation}: DriverHomeProps) => {
  return (
    <View>
      <Text>Driver Dashboard</Text>
      <Image width={100} height={100} source={require("../../assets/images/retailer/tshirt.jpeg")}></Image>
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
