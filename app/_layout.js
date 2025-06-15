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
          headerTitle: "Catbreeds",
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "white",
          headerTitleAlign: "center", 
          headerTitleStyle: {
            color: "black",
            fontFamily: "Roboto", 
            fontSize: 18,
            fontWeight: "bold",
          },
        }}
      />
    </View>
  );
}
