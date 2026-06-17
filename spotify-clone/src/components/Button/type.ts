import { GestureResponderEvent } from "react-native";

export interface PropsButton {
  text: string;
  icon?: "facebook" | "apple" | "google";
  type: "solid" | "outline";
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
