import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const library = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Text>library</Text>
    </SafeAreaView>
  );
};

export default library;

const styles = StyleSheet.create({});
