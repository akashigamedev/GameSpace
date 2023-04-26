import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Color } from "../assets/colors";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Font } from "../assets/Font";
import { GenreChip } from "../components/GenreChip";
import { FlatList } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native";
import Ionicon from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { RequirmentList } from "../components/RequirmentList";
import { AchievementCard } from "../components/AchievementCard";
import { CriticsReviewCard } from "../components/CriticsReviewCard";
import { UserReviewCard } from "../components/UserReviewCard";

const [statusItems, setStatusItems] = useState([
  { label: "Planning to Play", value: "Planning to Play" },
  { label: "Playing", value: "Playing" },
  { label: "Completed", value: "Completed" },

  { label: "Dropped", value: "Dropped" },
]);
const [ratingItems, setRatingItems] = useState([
  { label: "1 - Appaling", value: "1 - Appaling" },
  { label: "2 - Horrible", value: "2 - Horrible" },
  { label: "3 - Very Bad", value: "3 - Very Bad" },
  { label: "4 - Bad", value: "4 - Bad" },
  { label: "5 - Average", value: "5 - Average" },
  { label: "6 - Fine", value: "6 - Fine" },
  { label: "7 - Good", value: "7 - Good" },
  { label: "8 - Very Good", value: "8 - Very Good" },
  { label: "9 - Great", value: "9 - Great" },
  { label: "10 - Masterpiece", value: "10 - Masterpiece" },
]);

const data = [
  {
    id: 1,
    genre: "Action-Roguelite",
  },
  {
    id: 2,
    genre: "Roguelite",
  },
  {
    id: 3,
    genre: "Hack and Slash",
  },
];

const minimumRequirments = [
  {
    title: "OS",
    key: "Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit",
  },
  {
    title: "Processor",
    key: "Intel Core i3-2100 | AMD FX-6300",
  },

  {
    title: "Memory",
    key: "4 GB RAM",
  },

  {
    title: "Graphics",
    key: "NVIDIA GeForce GTX 760 | AMD Radeon HD 7950",
  },
  {
    title: "DirectX",
    key: "Version 11",
  },
  {
    title: "Network",
    key: "Broadband Internet connection",
  },
  {
    title: "Storage",
    key: "25 GB available space",
  },
  {
    title: "Sound Card",
    key: "DirectX 11 Compatible",
  },
];

const maximumRequirments = [
  {
    title: "OS",
    key: "Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit",
  },
  {
    title: "Processor",
    key: "Intel Core i5-2500K | AMD Ryzen 5 1400",
  },
  {
    title: "Memory",
    key: "8 GB RAM",
  },
  {
    title: "Graphics",
    key: "NVIDIA GeForce GTX 970 | AMD Radeon RX 570",
  },
  {
    title: "DirectX",
    key: "Version 11",
  },
  {
    title: "Network",
    key: "Broadband Internet connection",
  },
  {
    title: "Storage",
    key: "25 GB available space",
  },
  {
    title: "Sound Card",
    key: "DirectX 11 Compatible",
  },
];

const achievements = [
  {
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/814380/4f2088f8818ec2eb60119b3cd3a9213509bab46d.jpg",
    title: "Revered Blade",
  },
  {
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/814380/2a664af0026dcd3489d7f60122e232f241889cde.jpg",
    title: "Shinobi Prosthetic",
  },
  {
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/814380/1fa9f3969c2e07bc44b9607031b10572dc7d8275.jpg",
    title: "Resurrection",
  },
  {
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/814380/1ab3511c9c603e5f059a447d9d1b860be681f255.jpg",
    title: "Memorial Mob",
  },
  {
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/814380/d43f8eeed11aa7bb34e293a0304b9be2ff566ea6.jpg",
    title: "Gyoubu Masataka Oniwa",
  },
  {
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/814380/f567afafa39c997eb10b29b11de0449133c04159.jpg",
    title: "The Phantom Lady Butterfly",
  },
];

const criticsReview = [
  {
    image: "https://world.ign.com/images/flag-2020/ign-wip-2020-sq.png",
    username: "IGN",
    comment:
      "Sekiro: Shadows Die Twice is a stylish, focused stealth-action take on the FromSoftware formula that evolves in a different and refreshing direction.",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/1024px-Metacritic.svg.png",
    username: "MetaCritic",
    comment:
      "This is the most amazing game I ever played, the graphics, the sounds and the overall gameplay is astonishing. I divorced my wife to play this game 24/7. 10/10 Loved it!!!",
  },
];

const userReview = [
  {
    image:
      "https://images.pexels.com/photos/4927361/pexels-photo-4927361.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "Jon The Jaguar Catcher",
    comment:
      "This is the most amazing game I ever played, the graphics, the sounds and the overall gameplay is astonishing. I divorced my wife to play this game 24/7. 10/10 Loved it!!!",
    status: true,
  },
  {
    image:
      "https://images.pexels.com/photos/4780537/pexels-photo-4780537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Steven",
    comment:
      "I couldn’t sit through this piece of garbage game. The bosses are too hard, the music sucks, the combat is clunky as hell. Overall a big waste of time 0/10.",
    status: false,
  },
  {
    image:
      "https://images.pexels.com/photos/4298629/pexels-photo-4298629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "Steven's Father",
    comment:
      "My Son is an idiot who can’t play a fucking game the right way. In my time we used to climb mountains on one foot while the other foot was starting a business. We fought dinosaurs with our bare hands just to get food. My son can’t even beat a video game character, He is a failure. Amazing game btw 10/10.",
    status: true,
  },
];

export const GameInfo = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [openStatus, setOpenStatus] = useState(false);
  const [openRating, setOpenRating] = useState(false);
  const [statusValue, setStatusValue] = useState(null);
  const [ratingValue, setRatingValue] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />

      <FlatList
        data={[{ text: "" }]}
        renderItem={({ item }) => {
          return (
            <View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={{
                    backgroundColor: Color.flat_btn_bg_alt,
                    position: "absolute",
                    padding: 10,
                    borderRadius: 10,
                    zIndex: 5,
                    top: 16,
                    left: 16,
                  }}
                  onPress={() => navigation.goBack()}>
                  <Entypo name="chevron-left" size={24} color="white" />
                </TouchableOpacity>
                <Image
                  source={require("../assets/images/sekiro.jpg")}
                  style={{ width: "100%", height: 300, zIndex: -5 }}
                />
              </View>
              <View style={styles.bottomView}>
                <View
                  id="titleView"
                  style={{
                    alignItems: "center",
                    marginTop: 16,
                  }}>
                  <Text style={Font.h1Bold}>SEKIRO</Text>
                  <Text style={Font.h2SemiBold}>Shadows Die Twice</Text>
                </View>

                <View id={"developerPublisherView"} style={{ marginTop: 24 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginHorizontal: 32,
                    }}>
                    <Text style={Font.h6SemiBold}>Developer</Text>
                    <Text style={Font.h6Regular}>Supergiant Games</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginHorizontal: 32,
                    }}>
                    <Text style={Font.h6SemiBold}>Publisher</Text>
                    <Text style={Font.h6Regular}>Supergiant Games</Text>
                  </View>
                </View>

                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ flexGrow: 0, marginTop: 24, marginHorizontal: 16 }}
                  data={data}
                  renderItem={({ item }) => {
                    return (
                      <GenreChip
                        genre={item.genre}
                        textStyle={Font.h5Regular}
                        paddingHorizontal={16}
                        paddingVertical={8}
                      />
                    );
                  }}
                />

                <View style={{ marginTop: 32, marginHorizontal: 16 }}>
                  <Text style={Font.h4Bold}>Add to Library</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 16,
                      justifyContent: "space-between",
                    }}>
                    <DropDownPicker
                      open={openStatus}
                      value={statusValue}
                      items={statusItems}
                      setOpen={setOpenStatus}
                      setValue={setStatusValue}
                      setItems={setStatusItems}
                      containerStyle={{
                        width: "auto",
                        maxWidth: 170,
                      }}
                      style={{
                        backgroundColor: Color.flat_secondary,
                        borderRadius: 10,
                      }}
                      placeholder="Status"
                      placeholderStyle={{
                        marginHorizontal: 8,
                        color: Color.white,
                      }}
                      dropDownContainerStyle={{
                        backgroundColor: Color.flat_btn_bg,
                      }}
                      textStyle={Font.h6SemiBold}
                      listItemLabelStyle={Font.h5Regular}
                      listMessageTextStyle={Font.h5Regular}
                      ArrowDownIconComponent={({ style }) => (
                        <Ionicon
                          name="chevron-down"
                          size={18}
                          style={{ color: Color.white }}
                        />
                      )}
                      ArrowUpIconComponent={({ style }) => (
                        <Ionicon
                          name="chevron-up"
                          size={18}
                          style={{ color: Color.white }}
                        />
                      )}
                      itemSeparator={() => {
                        <View style={{ height: 2 }} />;
                      }}
                    />

                    <DropDownPicker
                      open={openRating}
                      value={ratingValue}
                      items={ratingItems}
                      setOpen={setOpenRating}
                      setValue={setRatingValue}
                      setItems={setRatingItems}
                      containerStyle={{
                        width: "auto",
                        maxWidth: 170,
                      }}
                      style={{
                        backgroundColor: Color.flat_secondary,
                        borderRadius: 10,
                      }}
                      placeholder="Rating"
                      placeholderStyle={{
                        marginHorizontal: 8,
                        color: Color.white,
                      }}
                      dropDownContainerStyle={{
                        backgroundColor: Color.flat_btn_bg,
                      }}
                      textStyle={Font.h6SemiBold}
                      listItemLabelStyle={Font.h5Regular}
                      listMessageTextStyle={Font.h5Regular}
                      ArrowDownIconComponent={({ style }) => (
                        <Ionicon
                          name="chevron-down"
                          size={18}
                          style={{ color: Color.white }}
                        />
                      )}
                      ArrowUpIconComponent={({ style }) => (
                        <Ionicon
                          name="chevron-up"
                          size={18}
                          style={{ color: Color.white }}
                        />
                      )}
                      itemSeparator={() => {
                        <View style={{ height: 2 }} />;
                      }}
                    />
                  </View>
                  <View
                    style={{
                      marginTop: 12,
                      zIndex: -5,
                      width: 300,
                      alignSelf: "center",
                    }}>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={{
                        backgroundColor: Color.flat_accent,
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <Text style={Font.h5Bold}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  id="AboutView"
                  style={{ marginTop: 32, marginHorizontal: 16, zIndex: -5 }}>
                  <Text style={Font.h4Bold}>About The Game</Text>
                  <Text
                    style={[
                      Font.h6Regular,
                      {
                        lineHeight: 26,
                        letterSpacing: 0.1,
                        marginTop: 16,
                        marginRight: 16,
                      },
                    ]}>
                    Game of the Year - The Game Awards 2019 Best Action Game of
                    2019 - IGN Carve your own clever path to vengeance in the
                    award winning adventure from developer FromSoftware,
                    creators of Bloodborne and the Dark Souls series. Take
                    Revenge. Restore Your Honor. Kill...Read More
                  </Text>
                </View>

                <View
                  id="SystemRequirmentsView"
                  style={{
                    marginTop: 32,
                    marginHorizontal: 16,
                  }}>
                  <Text style={Font.h4Bold}>System Requirments</Text>
                  <Text style={[Font.h5SemiBold, { marginTop: 16 }]}>
                    MINIMUM
                  </Text>
                  <RequirmentList data={minimumRequirments} />
                  <Text style={[Font.h5SemiBold, { marginTop: 16 }]}>
                    MAXIMUM
                  </Text>
                  <RequirmentList data={minimumRequirments} />
                </View>

                <View
                  id="AchievementsView"
                  style={{ marginTop: 32, marginHorizontal: 16 }}>
                  <Text style={Font.h4Bold}>Achievements</Text>
                  <FlatList
                    style={{
                      flexGrow: 0,
                    }}
                    contentContainerStyle={{
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                    horizontal
                    data={achievements}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <AchievementCard
                          image={item.image}
                          title={item.title}
                        />
                      );
                    }}
                    ItemSeparatorComponent={() => (
                      <View style={{ width: 10 }} />
                    )}
                  />
                </View>

                <View
                  id="Critics Review"
                  style={{ marginTop: 32, marginHorizontal: 16 }}>
                  <Text style={Font.h4Bold}>Critics Review</Text>
                  <FlatList
                    style={{ marginTop: 16 }}
                    data={criticsReview}
                    renderItem={({ item }) => {
                      return (
                        <CriticsReviewCard
                          image={item.image}
                          username={item.username}
                          comment={item.comment}
                        />
                      );
                    }}
                    ItemSeparatorComponent={() => (
                      <View style={{ height: 8 }} />
                    )}
                  />
                </View>

                <View
                  id="User Review"
                  style={{
                    marginTop: 32,
                    marginHorizontal: 16,
                  }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                    <Text style={Font.h4Bold}>User Review</Text>
                    <Text
                      style={{
                        fontFamily: "Poppins-SemiBold",
                        fontSize: 14,
                        color: Color.flat_accent,
                      }}>
                      see more...
                    </Text>
                  </View>
                  <FlatList
                    style={{ marginTop: 16 }}
                    data={userReview}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <UserReviewCard
                          image={item.image}
                          username={item.username}
                          comment={item.comment}
                          status={item.status}
                        />
                      );
                    }}
                    ItemSeparatorComponent={() => (
                      <View style={{ height: 8 }} />
                    )}
                  />
                </View>
                <View style={{ height: 32 }} />
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
    marginTop: 24,
    flex: 1,
  },
  bottomView: {
    zIndex: 5,
    width: "100%",
    backgroundColor: Color.flat_primary,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    marginTop: -60,
  },
});
