import { View, Image, Text } from "react-native";
import { Font } from "../assets/Font";

export const SCard = ({ image, title }) => {
  return (
    <View>
      <Image
        source={{ uri: image }}
        style={{
          height: 164,
          width: 164,
          borderRadius: 10,
        }}
      />
      <Text style={[Font.h5SemiBold, { marginTop: 4 }]}>{title}</Text>
    </View>
  );
};
