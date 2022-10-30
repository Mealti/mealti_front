import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
const LargeText = ({ text }: { text: string }) => {
  return (
    <LargeTextWrapper>
      <LargeTextContainer>{text}</LargeTextContainer>
    </LargeTextWrapper>
  );
};

export default LargeText;

const LargeTextWrapper = styled.View``;
const LargeTextContainer = styled.Text`
  color: ${(props) => props.theme.color.subColor};
  font-size: 30px;
  font-weight: 700;
  text-shadow: 2px 2px 2px gray;
  margin-bottom: 20px;
`;
