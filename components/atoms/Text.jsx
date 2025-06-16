import { Text } from "react-native";

export default function TextAtom({
  children,
  bold = false,
  center = false,
  className = "",
  style,
  ...props
}) {
  const classes = `${center ? "text-center" : ""} ${className}`;
  const fontFamily = bold ? "Montserrat-Bold" : "Montserrat";

  return (
    <Text
      className={classes}
      style={[{ fontFamily }, style]}
      {...props}
    >
      {children}
    </Text>
  );
}
