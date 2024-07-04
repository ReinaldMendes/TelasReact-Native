import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

type Props = {
  title: string;
  company: string;
  location: string;
  onPress: () => void;
}



const JobItem = ({ title, company, location, onPress }:Props) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={[styles.title, styles.bold, styles.underline]}>{title}</Text>
        <Text style={styles.company}>{company}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFFF00",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
  },
  company: {
    fontSize: 16,
    color: "#666",
  },
  location: {
    fontSize: 14,
    color: "#888",
  },
  bold: {
    fontWeight: "bold",
  },
  underline: {
    textDecorationLine: "underline",
  },
});

export default JobItem;
