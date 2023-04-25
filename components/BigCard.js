import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color } from "../assets/colors";
import { GenreChip } from "./GenreChip";
import { Font } from "../assets/Font.js";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const BigCard = ({ image, title, rank, publisher, genres }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: 360, height: 200 }}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
          imageStyle={{ borderRadius: 10 }}>
          <LinearGradient
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              justifyContent: "flex-end",
            }}
            colors={["rgba(1,1,1,0)", "rgba(15,15,15,1)"]}>
            <View style={{ alignItems: "flex-end", marginHorizontal: 8 }}>
              <View>
                <Text style={[Font.h4Bold, {}]}>{title}</Text>
                <Text style={[styles.publisher, Font.h6Regular]}>
                  {publisher}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingLeft: 8,
                  marginTop: 8,
                }}>
                <Text style={Font.h4Bold}>{`# ${rank}`}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}>
                  {genres.map((genre) => {
                    return (
                      <GenreChip
                        genre={genre}
                        textStyle={styles.genreChip}
                        paddingHorizontal={6}
                        paddingVertical={2}
                      />
                    );
                  })}
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  genreChip: {
    color: Color.white,
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
  },
  container: {
    alignSelf: "center",
  },
  publisher: {
    letterSpacing: 0.06,
    marginTop: -8,
  },
  bottomCardView: {
    flexDirection: "row",
    position: "absolute",
    top: 150,
    right: 8,
    width: "86%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  blurEffect: {
    backgroundColor: Color.flat_secondary,
    alignSelf: "center",
    position: "absolute",
    width: 360,
    height: 100,
    bottom: 0,
    opacity: 0.5,
  },
});
