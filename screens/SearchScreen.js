import { ScrollView } from "react-native";
import { SearchContainer } from "../containers/search";

const SearchScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <SearchContainer navigation={navigation} />
    </ScrollView>
  );
};

export default SearchScreen;
