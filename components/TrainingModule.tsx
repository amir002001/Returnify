import { Avatar, Button, Card, Paragraph, Title } from "react-native-paper";
import { TrainingModuleProps } from "./ComponentTypes";

// Component for each training module
const TrainingModule = ({
  moduleName,
  moduleSubtitle,
  navigation,
  ...props
}: TrainingModuleProps) => {
  const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <Card onTouchEnd={() => navigation.navigate("Module")} {...props}>
      <Card.Title title={moduleName} subtitle={moduleSubtitle} />
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    </Card>
  );
};

export default TrainingModule;
