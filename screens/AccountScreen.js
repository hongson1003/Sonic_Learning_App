import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { AccountInfo } from "../containers/account/accountInfo";
import { getImage } from "../utils";

const AccountScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user?.data);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={styles.headerRightButton}>
          <Icon name="shopping-cart" size={25} color="#2196F3" />
        </Text>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AccountInfo
        avatarUrl={getImage(user.avatar)}
        name={user.fullName}
        email={user.email}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerRightButton: {
    marginRight: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AccountScreen;
