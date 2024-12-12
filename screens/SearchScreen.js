import { ScrollView } from "react-native";
import { SearchContainer } from "../containers/search";

const SearchScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <SearchContainer />
    </ScrollView>
  );
};

export default SearchScreen;
