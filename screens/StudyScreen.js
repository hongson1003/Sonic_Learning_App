import { ScrollView } from "react-native";
import { StudyContainer } from "../containers/study";

const StudyScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <StudyContainer />
    </ScrollView>
  );
};

export default StudyScreen;
