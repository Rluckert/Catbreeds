import { Stack } from "expo-router";
import { View } from "react-native";


export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTitle: "Testing", 
          headerTintColor: "black",
          headerTitleStyle: { color: "black" },
          headerLeft: () => {} ,
          headerRight: () => {},
        }}
      />
    </View>
  );
}