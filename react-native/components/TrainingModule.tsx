import { TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Paragraph, Title } from "react-native-paper";
import { TrainingModuleProps } from "./ComponentTypes";

// Component for each training module
const TrainingModule = ({
  moduleName,
  moduleSubtitle,
  navigation,
  moduleId,
  ...props
}: TrainingModuleProps) => {
  return (
    <TouchableOpacity onPress={()=> {navigation.navigate("Module", {moduleId: moduleId})}}>
    <Card {...props}>
      <Card.Title title={moduleName} subtitle={moduleSubtitle} />
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    </Card>
    </TouchableOpacity>
  );
};

export default TrainingModule;
