import React from "react";
import { View, Text } from "react-native";
import { Color } from "../assets/colors";

export const GenreChip = ({
  genre,
  textStyle,
  paddingVertical,
  paddingHorizontal,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
        borderWidth: 1,
        borderColor: Color.white,
        borderRadius: 10,
        alignItems: "center",
        marginLeft: 4,
      }}>
      <Text style={textStyle}>{genre}</Text>
    </View>
  );
};
