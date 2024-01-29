import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import data from "../assets/recommended.json";
import { FlatList } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";
import { Audio } from "expo-av";
const Reccomended = () => {
  const [sound, setSound] = useState();
  async function playsound(link) {
    setSound(null);
    const { sound } = await Audio.Sound.createAsync({
      uri: link,
    });
    await sound.stopAsync();
    console.log(link, ` Playing`);
    await Audio.getPermissionsAsync();
    setSound(sound);
    await sound.playAsync();
  }
  return (
    <View style={{ margin: 5, gap: 5, marginTop: 15 }}>
      <Text
        style={{ fontFamily: "Poppins_600SemiBold", fontSize: 18, margin: 5 }}
      >
        Reccomended for you{" "}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
        data={data.tracks}
        renderItem={({ item }) => {
          let img = item.album.images[0];
          console.log(img);
          return (
            <TouchableOpacity
              onPress={async () => {
                if (sound) {
                  await sound.stopAsync();
                }
                playsound(item.preview_url);
              }}
              style={{ width: 150 }}
            >
              <Image
                source={{ uri: img.url }}
                style={{ borderRadius: 1 }}
                height={150}
                width={150}
                resizeMode="contain"
              />

              <Text
                style={{
                  //   position: "absolute",
                  bottom: 0,
                  margin: 5,
                  //   backgroundColor: "grey",
                  opacity: 0.8,
                  borderRadius: 1,
                  padding: 2.5,
                  fontFamily: "Poppins_500Medium",
                  flexWrap: "wrap",
                  fontSize: 12,
                }}
              >
                {item.name} - {item.artists[0].name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Reccomended;

const styles = StyleSheet.create({});
