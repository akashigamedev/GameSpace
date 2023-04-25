import React from "react";

import { Text, View, Image } from "react-native";
import { Font } from "../assets/Font";

export const SmallCard = ({ image, title, description }) => {
  return (
    <View style={{ marginTop: 24 }}>
      <Image
        source={{ uri: image }}
        style={{
          width: 155,
          height: 155,
          borderRadius: 10,
        }}
        resizeMode="cover"
      />
      <View style={{ maxWidth: 155 }}>
        <Text style={[Font.h6SemiBold, { marginTop: 4 }]}>{title}</Text>
        <Text
          numberOfLines={3}
          style={[Font.p, { lineHeight: 15, opacity: 0.85 }]}>
          {description}
        </Text>
      </View>
    </View>
  );
};
