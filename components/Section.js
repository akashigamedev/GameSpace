import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Font } from "../assets/Font";
import { SmallCard } from "./SmallCard";

export const Section = ({ title, list }) => {
  return (
    <View style={{ marginTop: 32 }}>
      <Text style={[Font.h4Bold, { marginLeft: 16 }]}>{title}</Text>
      <LinearGradient
        style={{ width: "100%", marginTop: 16 }}
        colors={["rgba(25, 28, 37, 1)", "rgba(25, 28, 37, 0)"]}>
        <FlatList
          data={list}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity activeOpacity={0.7}>
                <SmallCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </TouchableOpacity>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ width: 24 }} />}
        />
      </LinearGradient>
    </View>
  );
};
