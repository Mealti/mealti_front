import React from "react";
import { AuthScreenProps } from "types";
import { Text, View } from "components/Themed";
import { Button } from "react-native";

const Login = ({ navigation }: AuthScreenProps<"Login">) => {
  const handlePress = () => {
    navigation.navigate("NickName");
  };
  return (
    <View>
      <Text>Login</Text>
      <Button title="로그인" onPress={handlePress} />
    </View>
  );
};

export default Login;
