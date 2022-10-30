import { useState } from "react";
import { View, Text } from "react-native";
import React from "react";
import Input from "components/ui/Input";
import Button from "components/ui/Button";
import styled from "styled-components/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
interface ICredentialProps {
  email: boolean;
  password: boolean;
  confirmEmail: boolean;
  confirmPassword: boolean;
}
interface IAccountProps {
  email: string;
  password: string;
  confirmEmail: string;
  confirmPassword: string;
}

interface IAuthFormProps {
  isLogin?: boolean;
  onSubmit: () => void;
  credentialsInvalid: ICredentialProps;
}
const AuthForm = ({
  isLogin,
  onSubmit,
  credentialsInvalid,
}: IAuthFormProps) => {
  const [isCheckAuthLogin, setIsCheckAutoLogin] = useState<boolean>(false);
  const [isCheckAgree, setIsCheckAgree] = useState<boolean>(false);
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] =
    useState<string>("");
  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;
  const updateInputValueHandler = (inputType: string, enteredValue: string) => {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  };
  const submitHandler = () => {
    // console.log(enteredEmail, enteredPassword, isCheckAuthLogin);
    onSubmit();
  };
  return (
    <AuthFormWrapper>
      <AuthInputWrapper>
        <Input
          // label="Email Address"
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
          placeholder="이메일을 입력해주세요"
        ></Input>
        <Input
          // label="Password"
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
          placeholder="비밀번호를 입력해주세요"
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              "confirmPassword"
            )}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
            placeholder="비밀번호를 확인해주세요"
          />
        )}
      </AuthInputWrapper>
      <CheckBoxWrapper>
        {isLogin ? (
          <BouncyCheckbox
            textStyle={{
              textDecorationLine: "none",
            }}
            size={25}
            fillColor="#00755d"
            unfillColor="#FFFFFF"
            text="자동로그인"
            iconStyle={{ borderColor: "#00755d" }}
            innerIconStyle={{ borderWidth: 2, borderRadius: 10 }}
            onPress={(isChecked: boolean) => {
              setIsCheckAutoLogin(isChecked);
            }}
          ></BouncyCheckbox>
        ) : (
          <BouncyCheckbox
            textStyle={{
              textDecorationLine: "none",
            }}
            size={25}
            fillColor="#00755d"
            unfillColor="#FFFFFF"
            text="개인정보 수집 동의"
            iconStyle={{ borderColor: "#00755d" }}
            innerIconStyle={{ borderWidth: 2, borderRadius: 10 }}
            onPress={(isChecked: boolean) => {
              setIsCheckAgree(isChecked);
            }}
          ></BouncyCheckbox>
        )}
      </CheckBoxWrapper>
      <ButtonWrapper>
        <Button
          text={isLogin ? "로그인" : "회원가입"}
          onPress={submitHandler}
        />
      </ButtonWrapper>
    </AuthFormWrapper>
  );
};

export default AuthForm;

const AuthFormWrapper = styled.View`
  width: 100%;
`;
const AuthInputWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;
const CheckBoxWrapper = styled.View`
  /* margin-left: 20px; */
  margin-horizontal: 20px;
  margin-vertical: 10px;
`;

const ButtonWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;
