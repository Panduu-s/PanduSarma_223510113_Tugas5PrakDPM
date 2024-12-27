import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import backgroundImage from "../assets/background.png";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.subtitle}>My Mobile App</Text>
          <Button
            title="Explore Details"
            onPress={() => navigation.navigate("Detail")}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            raised
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 | Pandu Sarma</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: "#34495e",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#3498db",
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 12,
    minWidth: 200,
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    position: 'absolute',
    bottom: 20,
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  }
});

export default HomeScreen;