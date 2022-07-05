import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "native-base";
import Calculator from "./src/screens/Calculator";
import Todos from "./src/screens/Todos";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Hello"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: { backgroundColor: theme.colors.primary["500"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Todos") {
            iconName = focused ? "file-tray-full" : "file-tray-full-outline";
          } else if (route.name === "Calculator") {
            iconName = focused ? "calculator" : "calculator-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInActiveTintColor: "grey",
      })}
    >
      <Tab.Screen name="Todos" component={Todos} options={{ headerShown: true }} />

      <Tab.Screen name="Calculator" component={Calculator} options={{ headerShown: true}} />
    </Tab.Navigator>
  );
}

export default function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MyTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
