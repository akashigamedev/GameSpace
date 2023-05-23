import React, { useLayoutEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Color } from "../assets/colors.js";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons.js";
import { Font } from "../assets/Font.js";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { BigCard } from "../components/BigCard.js";
import { Section } from "../components/Section.js";

const bigcardList = [
  {
    id: 1,
    image: require("../assets/images/sekiro.jpg"),
    title: "Sekiro Shadows Die Twice",
    publisher: "FromSoft Games",
    genres: ["Hack-Slash", "Action", "Story-Based"],
  },
  {
    id: 2,
    image: require("../assets/images/cyberpunk.jpg"),
    title: "CyberPunk 2077",
    publisher: "CD Projekt Red",
    genres: ["FPS", "Sci-fi", "RPG"],
  },
  {
    id: 3,
    image: require("../assets/images/forza_horizon.jpg"),
    title: "Forza Horizon",
    publisher: "PlayGround games",
    genres: ["Racing", "Adventure", "Action"],
  },
];

const trendingList = [
  {
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1922010/capsule_616x353.jpg?t=1681482087",
    title: "BREACHERS",
    description:
      "Breachers is a tactical 5v5 VR FPS. Plan your assault or orchestrate your defense...",
  },
  {
    image: "https://i.ytimg.com/vi/HLlAnX6Tick/maxresdefault.jpg",
    title: "ShardPunk: Verminfall",
    description:
      "The war is lost, the Capital lies in ruins, and you’re on the run! Shardpunk: Verminfall mixes turn...",
  },
  {
    image:
      "https://cdn.akamai.steamstatic.com/steam/apps/2114350/header.jpg?t=1682311393",
    title: "Is It Wrong to Repay the Debt in a Dungeon",
    description:
      "To repay the debt, both Akane and her mother have to earn a lot of money! Explore the...",
  },
  {
    image:
      "https://images.gog-statics.com/f15d39221fce55b7e2b291fbd9687d2c7a984271e3c6ac2ff0cb13bccd3cf8d5.jpg",
    title: "WARTALES",
    description:
      "Wartales is an open world RPG in which you lead a group of mercenaries in their search for...",
  },
  {
    image:
      "https://www.downtimebros.com/wp-content/uploads/2023/04/BlackCell-cod.jpg",
    title: "Call of Duty BlackCell",
    description:
      "Welcome to Warzone™ 2.0, the massive free-to-play combat arena which now features the...",
  },
];

export const Home = () => {
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
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 24,
                  marginHorizontal: 16,
                  justifyContent: "space-between",
                }}>
                <View
                  style={{
                    flexDirection: "row",
                  }}>
                  <Text style={Font.h4Regular}>Good Afternoon!</Text>
                  <Text
                    style={[
                      Font.h4Bold,
                      { color: Color.flat_accent, marginLeft: 8 },
                    ]}>
                    Akashi{" "}
                  </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={{
                    padding: 12,
                    backgroundColor: Color.flat_btn_bg,
                    borderRadius: 10,
                    marginBottom: 16,
                  }}>
                  <Ionicons
                    name="settings"
                    size={22}
                    color={Color.flat_btn_fg}
                  />
                </TouchableOpacity>
              </View>
              <View
                id="BigCardListView"
                style={{ marginHorizontal: 16, marginTop: 8 }}>
                <FlatList
                  data={bigcardList}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={() => navigation.navigate("GameInfoScreen")}>
                        <BigCard
                          image={item.image}
                          title={item.title}
                          publisher={item.publisher}
                          genres={item.genres}
                          rank={item.id}
                        />
                      </TouchableOpacity>
                    );
                  }}
                  ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                  keyExtractor={(item) => item.id}
                />
              </View>
              <View
                id="imageSliderView"
                style={{ alignItems: "center", marginTop: 8 }}>
                <View
                  style={{
                    width: 100,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}>
                  {bigcardList.map((item, index) =>
                    index == bigcardList.length % 2 ? (
                      <View
                        style={{
                          width: 30,
                          height: 5,
                          backgroundColor: Color.flat_btn_fg,
                        }}></View>
                    ) : (
                      <View
                        style={{
                          width: 30,
                          height: 5,
                          backgroundColor: Color.flat_btn_bg_alt,
                        }}></View>
                    )
                  )}
                </View>
              </View>
              <View style={{ marginTop: 28 }} />
              <Section title={"NEW AND TRENDING"} list={trendingList} />
              <Section title={"MOST POPULAR"} list={trendingList} />
              <Section title={"UPCOMING"} list={trendingList} />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: Color.flat_primary,
  },
});
