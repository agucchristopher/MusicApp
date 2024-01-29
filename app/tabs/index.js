import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Path, Svg } from "react-native-svg";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Release from "../../components/Release";
import Reccommended from "../../components/Reccomended";
import Playlist from "../../components/Playlist";

const home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 5 }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#fff", padding: 5 }}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar style="dark" backgroundColor="#fff" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "Poppins_700Bold" }}>
            Hello, Aziegwu
          </Text>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <TouchableOpacity style={{ padding: 5 }}>
              <Svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M21.5 16L21.989 16.5687C22.2614 16.3344 22.3294 15.9399 22.1512 15.6279L21.5 16ZM2.5 16L1.84882 15.6279C1.67056 15.9399 1.73858 16.3344 2.011 16.5687L2.5 16ZM19.5 12.5H18.75V12.6992L18.8488 12.8721L19.5 12.5ZM4.5 12.5L5.15118 12.8721L5.25 12.6992V12.5H4.5ZM12 19.75C16.0514 19.75 19.7088 18.5294 21.989 16.5687L21.011 15.4313C19.0683 17.1018 15.7895 18.25 12 18.25V19.75ZM2.011 16.5687C4.29125 18.5294 7.94862 19.75 12 19.75V18.25C8.21053 18.25 4.93165 17.1018 2.989 15.4313L2.011 16.5687ZM22.1512 15.6279L20.1512 12.1279L18.8488 12.8721L20.8488 16.3721L22.1512 15.6279ZM20.25 12.5V9.5H18.75V12.5H20.25ZM3.75 9.5V12.5H5.25V9.5H3.75ZM3.84882 12.1279L1.84882 15.6279L3.15118 16.3721L5.15118 12.8721L3.84882 12.1279ZM12 1.25C7.44365 1.25 3.75 4.94365 3.75 9.5H5.25C5.25 5.77208 8.27208 2.75 12 2.75V1.25ZM20.25 9.5C20.25 4.94365 16.5563 1.25 12 1.25V2.75C15.7279 2.75 18.75 5.77208 18.75 9.5H20.25Z"
                  fill="#141B34"
                />
                <Path
                  d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </Svg>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                borderRadius: 10000,
                padding: 5,
              }}
            >
              <Svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                  stroke="#fff"
                  stroke-width="1.5"
                />
              </Svg>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: "#f9f9f9",
            alignSelf: "center",
            width: "95%",
            borderRadius: 5,
            margin: 5,
            justifyContent: "center",
            padding: 5,
            marginLeft: 10,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: "green",
              height: "100%",
              width: 30,
            }}
          >
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M14 14L16.5 16.5"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <Path
                d="M16.4333 18.5252C15.8556 17.9475 15.8556 17.0109 16.4333 16.4333C17.0109 15.8556 17.9475 15.8556 18.5252 16.4333L21.5667 19.4748C22.1444 20.0525 22.1444 20.9891 21.5667 21.5667C20.9891 22.1444 20.0525 22.1444 19.4748 21.5667L16.4333 18.5252Z"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <Path
                d="M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9Z"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </Svg>
          </TouchableOpacity>
          <TextInput
            style={{
              width: "85%",
              // backgroundColor: "green",
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
              fontSize: 16,
              fontFamily: "Poppins_400Regular",
              textDecorationLine: "none",
            }}
            placeholder="Artist, Songs or Album"
          />
        </View>
        <Reccommended />
        <Release />
        <Playlist />
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({});
