import { View, Text } from "react-native";
import { Font } from "../assets/Font";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Color } from "../assets/colors";

export const Account = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.flat_primary,
      }}>
      <Text style={Font.h1Bold}>Account Tab</Text>
    </View>
  );
};
