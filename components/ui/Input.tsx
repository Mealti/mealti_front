import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

const Input = ({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  placeholder,
}: any) => {
  return (
    <InputContainer>
      {label && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <FontAwesome
            name="square"
            size={10}
            color="#00755D"
            style={{ marginHorizontal: 2 }}
          />
          <LabelText isInvalid>{label}</LabelText>
        </View>
      )}
      <TextInput
        isInvalid
        autoCapitalize={false}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={placeholder}
      ></TextInput>
    </InputContainer>
  );
};

export default Input;
interface IInvalidProps {
  isInvalid: boolean;
}
const InputContainer = styled.View`
  margin-vertical: 8px;
  border-radius: 15px;
  width: 80%;
`;
const LabelText = styled.Text<IInvalidProps>`
  /* color: ${(props) => (props.isInvalid ? "red" : "white")}; */
  margin-horizontal: 2px;
  margin-bottom: 4px;
`;

const TextInput = styled.TextInput<IInvalidProps>`
  padding-vertical: 8px;
  padding-horizontal: 8px;
  border-radius: 15px;
  height: 50px;
  font-size: 16;
  background-color: white;
  /* border-color: ${(props) => props.theme.color.mainColor}; */
  border: solid 2px #fa9a4f;
`;
