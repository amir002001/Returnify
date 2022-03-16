import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Colors, ProgressBar, Title } from "react-native-paper";
import { ModuleProps } from "../NavigationTypes";

const ModuleScreen = ({ navigation, route }: ModuleProps) => {
  return (
    <View>
      
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Title style={{textAlign: "center"}}>You've completed this module</Title>
      <ProgressBar style={styles.progressBar} progress={1} color={Colors.green800} />
      <Button
        onPress={() => {
          navigation.navigate("Assessment");
        }}
      >
        Take Assessment
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {

  },
  progressBar: {
      height: 10,
      borderRadius: 5,
      margin: 10
  }
});

export default ModuleScreen;
