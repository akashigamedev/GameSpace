import { Text, View, FlatList } from "react-native";
import { Font } from "../assets/Font";

export const RequirmentList = ({ data }) => {
  return (
    <FlatList
      style={{ marginRight: 16 }}
      data={data}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              width: "100%",
              flexDirection: "row",
            }}>
            <Text style={Font.h6Thin}>{`\u2022  ${item.title}:  `}</Text>
            <Text
              style={[
                Font.h6Regular,
                { lineHeight: 24, flexWrap: "wrap", flex: 1 },
              ]}>
              {item.key}
            </Text>
          </View>
        );
      }}
    />
  );
};
