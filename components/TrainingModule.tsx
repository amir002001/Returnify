
import { Avatar, Button, Card, Paragraph, Title } from "react-native-paper";
import { TrainingModuleProps } from "./ComponentTypes";

const TrainingModule = ({ moduleName, moduleSubtitle, navigation, ...props }: TrainingModuleProps) => {

  const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />

  return (
    <Card onTouchEnd={() => navigation.navigate("AppHome")} {...props}>
    <Card.Title title={moduleName} subtitle={moduleSubtitle} />
    <Card.Content>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
    </Card.Actions>
  </Card>
  );
};

export default TrainingModule;
