import AboutApp from "../../features/AboutApp/screens";
import Quotes from "../../features/Quotes/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TABS } from "../entities";



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: "#0070f3",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name={TABS.ABOUT_APP} component={AboutApp} />
        <Tab.Screen name={TABS.QUOTES} component={Quotes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
