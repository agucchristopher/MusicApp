import { Stack, Tabs } from "expo-router";
import colors from "../../assets/data.js";
import { Dimensions, Platform, Text } from "react-native";
import { Circle, Path, Svg } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";

export default () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          gap: 5,
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
          height:
            Platform.OS == "android"
              ? Dimensions.get("screen").height * 0.06
              : Dimensions.get("screen").height * 0.1,
        },
        tabBarLabel: ({ color, focused, children }) => {
          //   if (focused) {
          return (
            <Text
              style={{
                alignSelf: "center",
                justifyContent: "center",
                fontSize: 10,
                color: focused ? "#31aa36" : "#141B34",
                fontFamily: "Poppins_400Regular",
              }}
            >
              {/* <Svg
                  height={10}
                  width={10}
                  fill={colors.primary}
                  viewBox="0 0 200 200"
                >
                  <Circle cx="100" cy="100" r="75" />
                </Svg> */}
              {children}
            </Text>
          );
          //   }
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <TouchableOpacity>
                <Svg
                  height={23}
                  width={25}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"none"}
                  //   stroke={focused ? "#31aa36" : "#141B34"}
                >
                  <Path
                    d="M12 18L12 15"
                    stroke={focused ? "#31aa36" : "#141B34"}
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <Path
                    d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44633 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z"
                    stroke={focused ? "#31aa36" : "#141B34"}
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </Svg>
              </TouchableOpacity>
            );
          },
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <TouchableOpacity>
                <Svg
                  height={28}
                  width={25}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"none"}
                >
                  <Path
                    d="M14 14L17 17"
                    stroke={focused ? "#31aa36" : "#141B34"}
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <Path
                    d="M21.9994 19.5552L17.945 15.5L15.5 17.945L19.5544 22.0002L21.9994 19.5552Z"
                    stroke={focused ? "#31aa36" : "#141B34"}
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <Path
                    d="M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9Z"
                    stroke={focused ? "#31aa36" : "#141B34"}
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </Svg>
              </TouchableOpacity>
            );
          },
          title: "Search",
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <TouchableOpacity>
                <Svg
                  height={28}
                  width={25}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"none"}
                >
                  <Path
                    d="M18.8569 3.74469C14.8652 1.60383 11.9991 4.7597 11.9991 4.7597C11.9991 4.7597 9.13283 1.60382 5.14113 3.74468C0.306417 6.33768 -0.0407534 16.492 11.9991 21C24.0389 16.492 23.6916 6.33769 18.8569 3.74469Z"
                    stroke={focused ? "#31aa36" : "#141B34"}
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </Svg>
              </TouchableOpacity>
            );
          },
          title: "Favourite",
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <TouchableOpacity>
                <Svg
                  height={28}
                  width={25}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={"none"}
                >
                  <Path
                    d="M7.50304 4C7.48421 3.62851 7.55185 3.34156 7.73579 3.1C8.19267 2.5 9.12335 2.5 10.9847 2.5H13.0153C14.8766 2.5 15.8073 2.5 16.2642 3.1C16.4481 3.34156 16.5158 3.62851 16.497 4"
                    stroke={focused ? "#31aa36" : "#141B34"}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <Path
                    d="M5 8C5.03784 7.74037 5.12478 7.51593 5.26968 7.31431C5.85493 6.5 7.0681 6.5 9.49444 6.5H14.5056C16.9319 6.5 18.1451 6.5 18.7303 7.31431C18.8752 7.51593 18.9622 7.74037 19 8"
                    stroke={focused ? "#31aa36" : "#141B34"}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <Path
                    d="M3.81753 15.7128L4.53641 18.016C5.43193 20.8852 6.19729 21.5 9.21027 21.5H14.7897C17.8027 21.5 18.5681 20.8852 19.4636 18.016L20.1825 15.7128C20.9261 13.3303 21.2979 12.139 20.7101 11.3195C20.1223 10.5 18.896 10.5 16.4434 10.5H7.55662C5.104 10.5 3.8777 10.5 3.28988 11.3195C2.70207 12.139 3.07389 13.3303 3.81753 15.7128Z"
                    stroke={focused ? "#31aa36" : "#141B34"}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
              </TouchableOpacity>
            );
          },
          title: "Library",
        }}
      />
    </Tabs>
  );
};
