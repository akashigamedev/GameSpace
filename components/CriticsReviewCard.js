import { Text, View, Image } from "react-native";
import { Color } from "../assets/colors";
import { Font } from "../assets/Font";

export const CriticsReviewCard = ({ image, username, comment }) => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: image }}
          style={{ width: 30, height: 30, borderRadius: 5 }}
        />
        <Text style={[Font.h5Bold, { marginLeft: 12 }]}>{username}</Text>
      </View>
      <Text
        style={[
          Font.h6Regular,
          { lineHeight: 24, maxWidth: "80%", marginLeft: 42, opacity: 0.85 },
        ]}>
        {comment}
      </Text>
    </View>
  );
};

/*
<View
      style={{
        flexDirection: "row",
      }}>
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={{ height: 30, width: 30, borderRadius: 5 }}
        />
      </View>
      <View style={{ marginLeft: 12 }}>
        <Text style={font.h5Bold}>{username}</Text>
        <Text
          style={[
            font.h6Regular,
            { lineHeight: 22.4, maxWidth: "80%", opacity: 0.85 },
          ]}>
          {comment}
        </Text>
      </View>
    </View>
     */
