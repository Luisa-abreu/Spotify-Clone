import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { PropsButton } from "./type";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export const Button = ({ text, icon, type }: PropsButton) => {
  const icons = {
    facebook: <Ionicons name="logo-facebook" size={24} color="#1877F2" />,
    apple: <Ionicons name="logo-apple" size={24} color="#fff" />,
    google: <FontAwesome name="google" size={24} color="#fff" />,
  };
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === "outline" ? styles.buttonOutline : styles.buttonSolid,
      ]}
    >
      {icon && <View style={styles.icon}>{icons[icon]}</View>}
      <Text
        style={[
          styles.text,
          type === "outline" ? styles.textOutline : styles.textSolid,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
