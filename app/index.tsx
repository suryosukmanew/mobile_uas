import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/register")}
      >
        <Text style={styles.buttonText}>Go to Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/dashboard")}
      >
        <Text style={styles.buttonText}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff4757",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
