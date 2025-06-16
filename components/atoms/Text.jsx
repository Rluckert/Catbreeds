import { Text } from "react-native";

export default function TextAtom({
  children,
  bold = false,
  center = false,
  className = "",
  ...props
}) {
  const classes = `${bold ? "font-bold" : "font-normal"} ${center ? "text-center" : ""} text-black ${className}`;
  return (
    <Text className={classes} {...props}>
      {children}
    </Text>
  );
}
