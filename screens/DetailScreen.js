import React from "react";
import { View, Text, ImageBackground, StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native-elements";
import backgroundImage from "../assets/background.png";

const DetailScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Detail Screen</Text>
        <Text style={styles.subtitle}>Welcome to the details</Text>
        <View style={styles.contentBox}>
          <Text style={styles.description}>
            Disini Harusnya Detail\-Pandu Sarma
          </Text>
        </View>
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          containerStyle={styles.buttonContainer}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 | Pandu Sarma</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    padding: 25,
    width: Dimensions.get('window').width * 0.9,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2c3e50",
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 18,
    color: "#7f8c8d",
    marginBottom: 20,
  },
  contentBox: {
    backgroundColor: "rgba(236, 240, 241, 0.8)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,
    width: "100%",
  },
  description: {
    fontSize: 16,
    color: "#34495e",
    lineHeight: 24,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#3498db",
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
  buttonContainer: {
    width: 200,
    marginTop: 10,
  },
  buttonTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 15,
  },
  footerText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default DetailScreen;