import React from "react";
import { AuthScreenProps } from "types";
import AuthContent from "components/auth/AuthContent";

const Login = ({ navigation }: AuthScreenProps<"Login">) => {
  const handlePress = () => {
    navigation.navigate("Information");
  };
  return <AuthContent isLogin handlePress={handlePress} />;
};

export default Login;
