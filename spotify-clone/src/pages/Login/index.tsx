import { Switch, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { styles } from "./style";
import { useState } from "react";

export const Login = () => {
  const [ativo, setAtivo] = useState(false);
  return (
    <>
      <Text style={styles.title}>Log in to Spotify</Text>

      <Button text="Continue with Google" type="outline" icon="google" />
      <Button text="Continue with Facebook" type="outline" icon="facebook" />
      <Button text="Continue with Apple" type="outline" icon="apple" />
      <Button text="Continue with phone number" type="outline" />

      <View style={styles.divisor} />

      <Input
        placeholder="Email or username"
        label="Email or username"
        type="email"
      />
      <Input placeholder="Password" label="Password" type="senha" />

      <View style={styles.container}>
        <Switch
          value={ativo}
          onValueChange={setAtivo}
          trackColor={{ false: "#767577", true: "#1ED760" }}
          thumbColor={"#fff"}
        />
        <Text style={{ color: "#fff", fontWeight: 700 }}>Remember me</Text>
      </View>

      <Button text="Log in" type="solid" />

      <TouchableOpacity style={{ marginTop: 20 }}>
        <Text style={styles.link}>Forgot your Password?</Text>
      </TouchableOpacity>

      <View style={styles.divisor} />

      <View style={[styles.container, { justifyContent: "center" }]}>
        <Text style={{ color: "#fff" }}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Sign up for Spotify</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
