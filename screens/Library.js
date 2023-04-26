import { View, Text, TouchableOpacity, Image } from "react-native";
import { Font } from "../assets/Font.js";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Color } from "../assets/colors.js";
import Ionicons from "@expo/vector-icons/Ionicons.js";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { FilterChip } from "../components/FilterChip.js";
import { SavedCard } from "../components/SavedCard.js";

const filterList = [
  {
    id: 0,
    title: "All Games",
    active: true,
  },
  {
    id: 1,
    title: "Currently Playing",
    active: false,
  },
  {
    id: 2,
    title: "Completed",
    active: false,
  },
  {
    id: 3,
    title: "Plan to Watch",
    active: false,
  },
  {
    id: 4,
    title: "Dropped",
    active: false,
  },
];

const gamesList = [
  {
    id: 1,
    image:
      "https://assetsio.reedpopcdn.com/sekiro-shadows-die-twice-review-a-stripped-and-scarred-masterpiece-1553763621146.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    title: "Sekiro Shadows Die Twice",
    rating: "9 - Very Good",
    status: "Completed",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/81A+Ft4FXiL._SL1500_.jpg",
    title: "CyberPunk 2077",
    rating: "6 - Average",
    status: "Dropped",
  },
  {
    id: 3,
    image: "https://images.alphacoders.com/116/thumb-1920-1168382.jpg",
    title: "Forza Horizon 5",
    rating: "10 - Amazing",
    status: "Completed",
  },
  {
    id: 4,
    image:
      "https://cdn.arstechnica.net/wp-content/uploads/2020/04/valorant-listing-800x450.jpg",
    title: "Valorant",
    rating: "7 - Fine",
    status: "Playing",
  },
  {
    id: 5,
    image:
      "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TombRaiderGAMEOFTHEYEAREDITION_CrystalDynamics_S1_2560x1440-0c41fcc8db62992e8d098d304b2277f8",
    title: "Tomb Raider",
    rating: "9 - Very Good",
    status: "Completed",
  },
];

export const Library = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [activeFilterID, setActiveFilterID] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      <FlatList
        data={[""]}
        renderItem={({ item }) => {
          return (
            <View>
              <View
                id="Header"
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 16,
                  paddingTop: 24,
                  alignItems: "center",
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                  }}>
                  <Text style={Font.h1Bold}>Your Games</Text>
                  <Text style={[Font.h1Bold, { color: Color.flat_accent }]}>
                    {" "}
                    List
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
                id="FilterList"
                style={{
                  flexDirection: "row",
                  marginTop: 24,
                  height: 80,
                  backgroundColor: Color.flat_secondary,
                  alignItems: "center",
                }}>
                <FlatList
                  contentContainerStyle={{ paddingHorizontal: 16 }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={filterList}
                  renderItem={({ item }) => {
                    return item.id == activeFilterID ? (
                      <FilterChip
                        title={item.title}
                        isActive={true}
                        onPress={() => setActiveFilterID(item.id)}
                      />
                    ) : (
                      <FilterChip
                        title={item.title}
                        isActive={false}
                        onPress={() => setActiveFilterID(item.id)}
                      />
                    );
                  }}
                  ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                  keyExtractor={(item) => item.id}
                />
              </View>
              <View
                id="TotalGamesView"
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 16,
                  marginTop: 16,
                  paddingBottom: 2,
                  borderBottomWidth: 1,
                  borderBottomColor: Color.flat_btn_fg,
                }}>
                <Text style={Font.h4Regular}>Total Games</Text>
                <Text style={Font.h4SemiBold}>5</Text>
              </View>
              <View
                style={{
                  marginVertical: 24,
                  marginHorizontal: 8,
                }}>
                <FlatList
                  data={gamesList}
                  renderItem={({ item }) => {
                    return (
                      <SavedCard
                        image={item.image}
                        title={item.title}
                        rating={item.rating}
                        status={item.status}
                      />
                    );
                  }}
                  ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                />
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
    backgroundColor: Color.flat_primary,
    marginTop: 24,
  },
});
