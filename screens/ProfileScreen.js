import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Profile } from "../containers/account/profile";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user?.data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  return (
    <View style={styles.container}>
      {/* Header với nút back */}
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Thông tin người dùng</Text>
      </View>

      {/* Loading indicator */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <Profile profile={user} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#333",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
