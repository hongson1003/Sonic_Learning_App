import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Profile = ({ profile }) => {
  // Chuyển đổi ngày sinh từ Unix timestamp
  const birthDate = new Date(profile.birthDate * 1000).toLocaleDateString();

  // Chuyển đổi ngày tạo tài khoản từ Unix timestamp
  const createdAt = new Date(profile.createdAt * 1000).toLocaleDateString();

  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: profile.avatar }} style={styles.profileAvatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{profile.fullName}</Text>
          <Text style={styles.profileEmail}>{profile.email}</Text>
          <Text style={styles.profileRole}>{profile.role}</Text>
        </View>
      </View>

      <View style={styles.additionalInfoContainer}>
        <Text style={styles.infoTitle}>
          Ngày sinh: <Text style={styles.infoText}>{birthDate}</Text>
        </Text>
        <Text style={styles.infoTitle}>
          Ngày tạo tài khoản: <Text style={styles.infoText}>{createdAt}</Text>
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Followers</Text>
          <Text style={styles.statsValue}>{profile.countFollowers}</Text>
        </View>
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Courses Enrolled</Text>
          <Text style={styles.statsValue}>{profile.totalCoursesEnrolled}</Text>
        </View>
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Posts</Text>
          <Text style={styles.statsValue}>{profile.totalPosts}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 16,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  profileAvatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: "#e5e7eb",
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  profileEmail: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
  },
  profileRole: {
    fontSize: 12,
    color: "#9ca3af",
    marginTop: 4,
  },
  additionalInfoContainer: {
    marginTop: 24,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 32,
  },
  infoTitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 4,
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
    width: "30%",
  },
  statsTitle: {
    fontSize: 14,
    color: "#6b7280",
  },
  statsValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 4,
  },
});

export default Profile;
