import { Text, View, Image } from "react-native";
import { Font } from "../assets/Font";
import { Color } from "../assets/colors";

export const AchievementCard = ({ image, title }) => {
  return (
    <View
      style={{
        marginTop: 16,
        backgroundColor: Color.flat_secondary,
        alignSelf: "center",
        alignItems: "center",
        padding: 24,
        borderRadius: 10,
      }}>
      <Image
        source={{
          uri: image,
        }}
        style={{ width: 60, height: 60, borderRadius: 5 }}
      />
      <Text
        style={[
          Font.h6SemiBold,
          { maxWidth: 100, marginTop: 8, textAlign: "center" },
        ]}>
        {title}
      </Text>
    </View>
  );
};
