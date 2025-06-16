import { View } from "react-native";
import TextAtom from "../atoms/Text";

export default function BreedDetailItem({ label, value }) {
  return (
    <View className="mb-4">
      <TextAtom bold className="mb-1">{label}</TextAtom>
      <TextAtom>{value}</TextAtom>
    </View>
  );
}
