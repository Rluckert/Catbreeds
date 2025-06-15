import { useLocalSearchParams } from "expo-router";
import { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DetailPage() {
  const { id, name } = useLocalSearchParams(); 
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name || "Detalle de Raza", 
    });
  }, [navigation, name]);

  return (
    <View className="flex-1 bg-white pt-4 px-2">
      <Text className="text-2xl font-bold mb-4">Detalle de Raza: {name}</Text>
    </View>
  );
}