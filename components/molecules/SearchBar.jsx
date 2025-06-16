import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export function SearchBar({ value, onChangeText, placeholder = "Buscar..." }) {
  return (
    <View className="flex-row items-center border border-black rounded px-3 py-2 w-full mb-4">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        className="flex-1 text-base text-black"
        placeholderTextColor="#999"
      />
      <Feather name="search" size={18} color="#999" />
    </View>
  );
}

