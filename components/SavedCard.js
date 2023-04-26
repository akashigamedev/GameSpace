import { View, Text, Image, TouchableOpacity } from "react-native";
import { Color } from "../assets/colors";
import { Font } from "../assets/Font";

export const SavedCard = ({ image, title, rating, status }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        flexDirection: "row",
        padding: 8,
        backgroundColor: Color.flat_btn_bg,
        borderRadius: 10,
        maxWidth: 374,
      }}>
      <Image
        source={{ uri: image }}
        style={{ width: 138, height: 90, borderRadius: 10 }}
      />
      <View
        style={{
          marginLeft: 8,
          flex: 1,
        }}>
        <Text style={[Font.h5Bold, { flexWrap: "wrap", lineHeight: 24 }]}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 4,
          }}>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 12,
              color: Color.white,
              letterSpacing: 0.2,
            }}>
            {rating}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 12,
              color: Color.white,
              letterSpacing: 0.2,
            }}>
            {status}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            backgroundColor: Color.flat_btn_bg_alt,
            paddingHorizontal: 16,
            paddingVertical: 4,
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            borderRadius: 10,
            marginTop: 12,
          }}>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 12,
              color: Color.white,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
