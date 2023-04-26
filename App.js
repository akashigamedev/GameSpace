import React from "react";
import * as Font from "expo-font";
import { Home } from "./screens/Home.js";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicon from "@expo/vector-icons/Ionicons.js";
import { Color } from "./assets/colors.js";
import { Search } from "./screens/Search.js";
import { Library } from "./screens/Library.js";
import * as SplashScreen from "expo-splash-screen";
import { Account } from "./screens/Account.js";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="LibraryScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if (route.name == "HomeScreen") {
            iconName = "home";
          }

          if (route.name == "SearchScreen") {
            iconName = "search";
          }

          if (route.name == "LibraryScreen") {
            iconName = "library";
          }

          if (route.name == "AccountScreen") {
            iconName = "person";
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
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="SearchScreen" component={Search} />
      <Tab.Screen name="LibraryScreen" component={Library} />
      <Tab.Screen name="AccountScreen" component={Account} />
    </Tab.Navigator>
  );
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false };
  }

  async componentDidMount() {
    try {
      await SplashScreen.preventAutoHideAsync();
      await this._loadAssetsAsync();
    } catch (e) {
      console.warn(e);
    } finally {
      await SplashScreen.hideAsync();
    }
  }

  async _loadAssetsAsync() {
    await Font.loadAsync({
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
      "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
      "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
    });

    // Load other assets here

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return null; // Alternatively, return a loading indicator or splash screen
    }

    // Render your application content here
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }
}
