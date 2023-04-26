import { Text, TouchableOpacity } from "react-native";
import { Font } from "../assets/Font.js";
import { Color } from "../assets/colors.js";
import { StyleSheet } from "react-native";
import { useState } from "react";

export const FilterChip = ({ title, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={isActive ? styles.active : styles.inactive}
      onPress={onPress}
      activeOpacity={1.0}>
      <Text style={Font.h5SemiBold}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  active: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Color.flat_accent,
    alignItems: "center",
    justifyContent: "center",
  },
  inactive: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: Color.white,
    borderRadius: 20,
    opacity: 0.85,
    alignItems: "center",
    justifyContent: "center",
  },
});
