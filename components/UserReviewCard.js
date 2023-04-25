import { Image, Text, View } from "react-native";
import { Font } from "../assets/Font";
import { Color } from "../assets/colors";
import Entypo from "@expo/vector-icons/Entypo";

export const UserReviewCard = ({ image, username, comment, status }) => {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: image }}
            style={{ height: 30, width: 30, borderRadius: 5 }}
          />
          <Text style={[Font.h5Bold, { marginLeft: 12 }]}>{username}</Text>
        </View>
        <View
          style={{
            backgroundColor: Color.flat_btn_bg_alt,
            padding: 8,
            borderRadius: 5,
          }}>
          {status ? (
            <Entypo name="thumbs-up" size={14} color={Color.white} />
          ) : (
            <Entypo name="thumbs-down" size={14} color={Color.white} />
          )}
        </View>
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
