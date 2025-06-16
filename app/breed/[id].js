import { useLocalSearchParams } from "expo-router";
import { useLayoutEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BreedPage from "../../components/pages/BreedPage";
import ScreenContainer  from "../../components/atoms/ScreenContainer";

export default function DetailPage() {
  const { id, name } = useLocalSearchParams();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name || "Detalle de Raza",
    });
  }, [navigation, name]);

  return (
    <View className="flex-1 bg-gray-100">
      <ScreenContainer>
        <BreedPage id={id} />
      </ScreenContainer>
    </View>
  );
}
