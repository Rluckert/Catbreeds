import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Stack, SplashScreen } from "expo-router";
import { View } from "react-native";

// Evita que el splash desaparezca automáticamente
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitleStyle: {
            color: "white",
            fontFamily: "Poppins",
            fontSize: 18,
          },
        }}
      />
    </View>
  );
}