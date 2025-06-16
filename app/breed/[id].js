import { useLocalSearchParams } from "expo-router";
import { useLayoutEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BreedPage from "../../components/pages/BreedPage";

export default function DetailPage() {
  const { id, name } = useLocalSearchParams(); 
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name || "Detalle de Raza", 
    });
  }, [navigation, name]);

  return (
    <View className="w-full h-full bg-white px-2">
      <BreedPage id={id} />
    </View>
  );
}