import { Font } from "../assets/Font.js";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { Color } from "../assets/colors.js";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import Ionicon from "@expo/vector-icons/Ionicons.js";
import { Image } from "react-native";
import { SCard } from "../components/SCard.js";

const trendingList = [
  {
    id: 1,
    image:
      "https://cdn.arstechnica.net/wp-content/uploads/2020/04/valorant-listing-800x450.jpg",
    genre: "FPS",
  },
  {
    id: 2,
    image:
      "https://assetsio.reedpopcdn.com/the-witcher-3-wild-hunt-review-1431974534883.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    genre: "RPG",
  },
  {
    id: 3,
    image:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
    genre: "Action",
  },
  {
    id: 4,
    image:
      "https://images-cdn.ubuy.co.in/636e5b35ccecc8432f73fe74-fifa-16-standard-edition-playstation.jpg",
    genre: "Sports",
  },
  {
    id: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg",
    genre: "Adventure",
  },
  {
    id: 6,
    image: "https://img2.wtftime.ru/store/2022/02/04/uFpPJS23_big_poster.jpg",
    genre: "Hack and Slash",
  },
  {
    id: 7,
    image:
      "https://www.charlieintel.com/wp-content/uploads/2023/02/best-clash-of-clans-bases.jpg",
    genre: "RTS",
  },
  {
    id: 8,
    image:
      "https://www.saintlad.com/wp-content/uploads/2022/09/Saint-League-of-Legends.jpeg",
    genre: "MOBA",
  },
  {
    id: 9,
    image:
      "https://assets-prd.ignimgs.com/2021/12/08/portal2-1638924084230.jpg",
    genre: "Puzzle",
  },
  {
    id: 10,
    image:
      "https://cdn2.unrealengine.com/2k-civ-6-great-negotiators-screenshots-saladin-militaryflanking-3840x2160-0f8811cd8748.png",
    genre: "Strategy",
  },
];

export const Search = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      <FlatList
        data={[""]}
        renderItem={({ item }) => {
          return (
            <View>
              <View
                id="SearchHeader"
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 16,
                  paddingTop: 24,
                  alignItems: "center",
                }}>
                <Text style={Font.h1Bold}>Search</Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    padding: 12,
                    backgroundColor: Color.flat_btn_bg,
                    borderRadius: 10,
                    marginBottom: 16,
                  }}>
                  <Ionicon
                    name="settings"
                    size={22}
                    color={Color.flat_btn_fg}
                  />
                </TouchableOpacity>
              </View>
              <View
                id="SearchBar"
                style={{
                  borderRadius: 10,
                  paddingHorizontal: 16,
                  marginTop: 8,
                  marginHorizontal: 16,
                  height: 60,
                  backgroundColor: Color.flat_secondary,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                <Text style={[Font.h6Bold, { color: Color.flat_btn_fg }]}>
                  Search for games
                </Text>
                <Ionicon name="search" size={22} color={Color.flat_btn_fg} />
              </View>
              <View
                id="Categories"
                style={{ marginHorizontal: 24, marginTop: 24 }}>
                <Text style={[Font.h3Bold, { letterSpacing: 0.2 }]}>
                  Categories
                </Text>
              </View>
              <View
                id="GamesSection"
                style={{
                  backgroundColor: Color.flat_btn_bg,
                  marginHorizontal: 8,
                  marginTop: 16,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}>
                <View
                  style={{
                    marginHorizontal: 16,
                    marginVertical: 8,
                  }}>
                  <FlatList
                    data={trendingList}
                    renderItem={({ item }) => {
                      return <SCard image={item.image} title={item.genre} />;
                    }}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={{
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      marginVertical: 8,
                    }}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: Color.flat_primary,
  },
});
