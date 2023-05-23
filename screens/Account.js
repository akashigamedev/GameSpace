import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Font } from "../assets/Font";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Color } from "../assets/colors";
import Ionicon from "@expo/vector-icons/Ionicons";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export const Account = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 16,
          marginTop: 48,
        }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={Font.h1Bold}>Your </Text>
          <Text style={[Font.h1Bold, { color: Color.flat_accent }]}>
            Account
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
          <Ionicon name="settings" size={22} color={Color.flat_btn_fg} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 16, alignItems: "center" }}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          style={{ width: "100%", height: 200, alignSelf: "center" }}
        />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={{
            height: 120,
            width: 120,
            borderRadius: 100,
            borderWidth: 4,
            borderColor: Color.white,
            marginTop: -120,
            zIndex: 2,
          }}
        />
        <View
          id="BottomSheet"
          style={{
            width: "100%",
            height: 500,
            backgroundColor: Color.flat_btn_bg,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: -64,
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 36,
              marginTop: 8,
            }}>
            <View style={{ alignItems: "center" }}>
              <Text style={Font.h5Bold}>2.6k</Text>
              <Text style={Font.h5Regular}>Followers</Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <Text style={Font.h5Bold}>526</Text>
              <Text style={Font.h5Regular}>Following</Text>
            </View>
          </View>
          <View style={{ alignItems: "center", marginTop: 16 }}>
            <Text style={Font.h5Thin}>@akashii77</Text>
            <Text
              style={[
                Font.h6Regular,
                {
                  color: Color.flat_btn_fg,
                  marginTop: 16,
                  marginHorizontal: 36,
                  lineHeight: 20,
                  textAlign: "center",
                  letterSpacing: 0.2,
                },
              ]}>
              "Hi! I’m Akash! I’m a student who also loves to play games in my
              free time. if you wanna play with me just dm me anytime.""
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              marginTop: 24,
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                paddingHorizontal: 24,
                paddingVertical: 8,
                backgroundColor: Color.flat_accent,
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 10,
              }}>
              <Text style={Font.h5Bold}>Follow</Text>
            </TouchableOpacity>
            <View style={{ width: 24 }} />
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: Color.flat_btn_bg_alt,
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 10,
              }}>
              <Text style={Font.h5SemiBold}>Message</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              marginHorizontal: 16,
              backgroundColor: Color.flat_secondary,
              paddingHorizontal: 16,
              paddingVertical: 24,
              borderRadius: 10,
              marginTop: 32,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text style={Font.h4Bold}>5 Games Owned</Text>
            <Ionicon name="chevron-down" size={24} color={Color.white} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.flat_primary,
  },
});
