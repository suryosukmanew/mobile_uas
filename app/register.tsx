import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  CheckBox,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Register() {
  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const onChangeValue = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleRegister = () => {
    if (!isChecked) {
      alert("Please agree to the terms and conditions!");
      return;
    }
    alert("Registration successful!");
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.title}>Get Started</Text>
        <Text style={styles.subtitle}>by creating a free account.</Text>

        {/* Input Full Name */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            placeholderTextColor="#B0B0B0"
            value={form.fullName}
            onChangeText={(value) => onChangeValue("fullName", value)}
          />
          <MaterialIcons
            name="person"
            size={20}
            color="#B0B0B0"
            style={styles.icon}
          />
        </View>

        {/* Input Email */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Valid email"
            placeholderTextColor="#B0B0B0"
            value={form.email}
            onChangeText={(value) => onChangeValue("email", value)}
          />
          <MaterialIcons
            name="email"
            size={20}
            color="#B0B0B0"
            style={styles.icon}
          />
        </View>

        {/* Input Phone Number */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            placeholderTextColor="#B0B0B0"
            value={form.phoneNumber}
            onChangeText={(value) => onChangeValue("phoneNumber", value)}
          />
          <MaterialIcons
            name="phone"
            size={20}
            color="#B0B0B0"
            style={styles.icon}
          />
        </View>

        {/* Input Password */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Strong Password"
            placeholderTextColor="#B0B0B0"
            secureTextEntry
            value={form.password}
            onChangeText={(value) => onChangeValue("password", value)}
          />
          <MaterialIcons
            name="lock"
            size={20}
            color="#B0B0B0"
            style={styles.icon}
          />
        </View>

        {/* Checkbox and Terms */}
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isChecked}
            onValueChange={setIsChecked}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxText}>
            By checking the box you agree to our{" "}
            <Text style={styles.termsText}>Terms and Conditions</Text>.
          </Text>
        </View>

        {/* Button Next */}
        <TouchableOpacity style={styles.nextButton} onPress={handleRegister}>
          <Text style={styles.nextButtonText}>Next</Text>
          <AntDesign name="arrowright" size={16} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Already a member */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already a member? </Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#B0B0B0",
    textAlign: "center",
    marginVertical: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
    paddingVertical: 12,
  },
  icon: {
    marginLeft: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 14,
    color: "#000000",
  },
  termsText: {
    color: "#FF4D4D",
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4D4D",
    padding: 15,
    borderRadius: 8,
    marginVertical: 20,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: "#B0B0B0",
  },
  footerLink: {
    fontSize: 14,
    color: "#FF4D4D",
    fontWeight: "bold",
  },
});
