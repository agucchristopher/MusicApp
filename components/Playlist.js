import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import data from "../assets/playlists.json";
import { FlatList } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";
const Reccomended = () => {
  // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
  const token =
    "BQCIgqin6lM_I4lE0e03ZAl4gKy7ZPzMCo6MaCuUw69OLCBC8-xdwzbKyWM9FtQ9-PU-emv_NsEcxbvl6mu3Ndm39o6y_i3hjN4B0SGNMhSuv_6tr56lSypVJmZS5V77j55CMmjO_u0bdP3bd9Og3htZ1j0fmn-bOF-7gu8ND8ye54sUJ6i7a2fhyxwI2kv7UKsKq8O0Ulx89lY6oHfKPfTsPZ-GHtIiycxDjt1d3ZP6xvKKkBvLI0a3Pqrl9JVJUomA9S159KAJ2Y6AAQyNWnj8";
  async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(
      `https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5`,
      {
        headers: {
          Authorization: `Bearer ` + token,
        },
        method,
        body: JSON.stringify(body),
      }
    );
    return await res.json();
  }

  async function getTopTracks() {
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (
      await fetchWebApi("v1/me/top/tracks?time_range=long_term&limit=5", "GET")
    ).items;
  }

  //   useEffect(async () => {
  //     // const topTracks = await getTopTracks().then((data) => console.log(data));
  //   }, []);

  return (
    <View style={{ margin: 5, gap: 5, marginTop: 0, marginBottom: 10 }}>
      <Text
        style={{ fontFamily: "Poppins_600SemiBold", fontSize: 18, margin: 5 }}
      >
        Popular Playlists{" "}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 5 }}
        data={data.items}
        renderItem={({ item }) => {
          let img = item.images[0].url;
          console.log(img);
          return (
            <TouchableOpacity>
              <Image
                source={{ uri: img }}
                style={{ borderRadius: 10 }}
                height={180}
                width={200}
                resizeMode="contain"
              />

              <Text
                style={{
                  position: "absolute",
                  bottom: 0,
                  margin: 5,
                  backgroundColor: "white",
                  opacity: 0.8,
                  borderRadius: 5,
                  padding: 2.5,
                  fontFamily: "Poppins_500Medium",
                  flexWrap: "wrap",
                }}
              >
                {/* {item.name} */}
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
