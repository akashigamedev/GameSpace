import { HomeScreen } from "./screens/HomeScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GameInfo } from "./screens/GameInfo.js";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicon from "@expo/vector-icons/Ionicons.js";
import { Color } from "./assets/colors.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if (route.name == "HomeScreen") {
            iconName = "home";
          }

          return <Ionicon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Color.flat_accent,
        tabBarInactiveTintColor: Color.flat_btn_fg,
        tabBarStyle: {
          backgroundColor: Color.flat_secondary,
          height: 70,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="GameInfo" component={GameInfo} />
    </Tab.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
