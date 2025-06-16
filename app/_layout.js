import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Stack, SplashScreen } from "expo-router";
import { Provider } from "react-redux";
import store from "../store";

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
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerTitle: "Catbreeds",
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "black",
            fontFamily: "Roboto",
            fontSize: 18,
            fontWeight: "bold",
          },
        }}
      />
    </Provider>
  );
}
