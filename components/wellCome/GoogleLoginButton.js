// components/GoogleLoginButton.js

import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { APP_ENVS } from "../../constants";

WebBrowser.maybeCompleteAuthSession();

const GoogleLoginButton = ({ onLoginSuccess }) => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    responseType: "id_token",
    webClientId: APP_ENVS.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
    scopes: ["email"],
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      onLoginSuccess(response);
    }
  }, [response]);

  const handleLogin = () => {
    try {
      promptAsync({
        prompt: "select_account",
      });
    } catch (error) {
      alert("Đã có lỗi xảy ra, vui lòng thử lại sau");
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, styles.googleButton]}
      onPress={handleLogin}
    >
      <Text style={styles.buttonText}>Đăng nhập với Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    width: "100%",
  },
  googleButton: {
    backgroundColor: "#333", // Màu nền Google button (dark gray)
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});

export default GoogleLoginButton;
