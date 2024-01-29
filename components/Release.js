import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import data from "../assets/newrelease.json";
import { FlatList } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";
import { Audio } from "expo-av";
import * as Notifications from "expo-notifications";
const Release = () => {
  const [sound, setSound] = useState();
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
  async function playsound(link, item, image) {
    // await Audio.getPermissionsAsync();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: item.name,
        body: "",
        launchImageName: image,
        sticky: true,
      },
      trigger: null,
    });
    const { sound } = await Audio.Sound.createAsync({
      uri: link,
    });
    await sound.stopAsync();
    console.log(link, ` Playing`);
    setSound(sound);
    await sound.playAsync();
  }
  return (
    <View style={{ margin: 5, gap: 5, marginTop: 0 }}>
      <Text
        style={{ fontFamily: "Poppins_600SemiBold", fontSize: 18, margin: 5 }}
      >
        New Release
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 5 }}
        data={data.items}
        renderItem={({ item }) => {
          let img = item.album.images[0];
          console.log(img);
          return (
            <TouchableOpacity
              onPressOut={async () => {
                // console.log(sound);
              }}
              onPress={async () => {
                if (sound) {
                  await sound.stopAsync();
                }
                playsound(item.preview_url, item, img.url);
              }}
              style={{ width: 180 }}
            >
              <Image
                source={{ uri: img.url }}
                style={{ borderRadius: 1 }}
                height={180}
                width={180}
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

export default Release;

const styles = StyleSheet.create({});
