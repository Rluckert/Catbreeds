import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ScreenContainer({ children }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 bg-white px-2"
      style={{ paddingBottom: insets.bottom + 16 }}
    >
      {children}
    </View>
  );
}
