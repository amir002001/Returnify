import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Colors, ProgressBar, Title } from "react-native-paper";
import { ModuleProps } from "../NavigationTypes";

// A screen for each particular module
const ModuleScreen = ({ navigation, route }: ModuleProps) => {
  const [module, setModule]: any = useState();

  useEffect(() => {
    fetch(`http://localhost:5200/api/Driver/Module/${route.params.moduleId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setModule(response);
        console.log(response);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Title style={{ textAlign: "center" }}>
        {module ? "watch content here " + module.contentLink : "loading..."}
      </Title>
      <ProgressBar
        style={styles.progressBar}
        progress={1}
        color={Colors.green800}
      />
      <Button
        onPress={() => {
          navigation.navigate("Assessment", {
            assessmentId: module.assessment.id,
          });
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
  title: {},
  progressBar: {
    height: 10,
    borderRadius: 5,
    margin: 10,
  },
});

export default ModuleScreen;
