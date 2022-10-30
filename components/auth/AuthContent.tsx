import { View, Text } from "react-native";
import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenProps, AuthParamList } from "types";
import Button from "components/ui/Button";
import LargeText from "components/ui/LargeText";
import AuthForm from "components/auth/AuthForm";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

interface ICredentialProps {
  email: boolean;
  password: boolean;
  confirmEmail: boolean;
  confirmPassword: boolean;
}

interface IAuthContentProps {
  isLogin?: boolean;
  handlePress: () => void;
}

const AuthContent = ({ isLogin, handlePress }: IAuthContentProps) => {
  const navigation = useNavigation<any>(); // 화면 전환

  const [credentialsInvalid, setCredentialsInvalid] =
    useState<ICredentialProps>({
      email: false,
      password: false,
      confirmEmail: false,
      confirmPassword: false,
    }); // 수정 예정
  const toggleAuthModeHandler = () => {
    // 로그인인지 회원가입인지
    if (!isLogin) {
      navigation.replace("Login");
    } else {
      navigation.replace("SignUp");
    }
  };

  return (
    <AuthContentWrapper>
      <LocalLoginWrapper>
        <LargeText text="MEALTI" />
        <AuthForm
          isLogin={isLogin}
          onSubmit={handlePress}
          credentialsInvalid={credentialsInvalid}
        />
        <View
          style={{
            width: "80%",
            // flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text onPress={toggleAuthModeHandler}>
            {isLogin ? "회원가입" : "로그인"}
          </Text>
        </View>
      </LocalLoginWrapper>
      {isLogin && (
        <OAuthLoginWrapper>
          <Text>간편 로그인</Text>
          <View style={{ marginVertical: 10 }}>
            <FontAwesome name="google" size={30} color="black" />
          </View>
        </OAuthLoginWrapper>
      )}
    </AuthContentWrapper>
  );
};

export default AuthContent;

const AuthContentWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const LocalLoginWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const OAuthLoginWrapper = styled.View`
  align-items: center;
  margin-vertical: 20px;
`;
