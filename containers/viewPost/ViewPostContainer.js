import { View } from "react-native";

const ViewPostContainer = ({ post }) => {
  return (
    <View>
      <Text>{post.title}</Text>
    </View>
  );
};

export default ViewPostContainer;
