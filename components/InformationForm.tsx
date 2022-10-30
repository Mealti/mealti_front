import { View, Text } from "react-native";
import React from "react";
import Input from "components/ui/Input";
import styled from "styled-components/native";

const InformationForm = () => {
  return (
    <InformationFormWrapper>
      <Input label="원하는 닉네임을 입력해주세요" placeholder="입력하기" />

      <Input
        label="매월 달력의 초기화 날짜를 입력해주세요."
        placeholder="입력하기"
        keyboardType="number"
      />

      <Input
        label="한달 식비 예상 금액을 입력해주세요."
        placeholder="입력하기"
        keyboardType="number"
      />
    </InformationFormWrapper>
  );
};

export default InformationForm;

const InformationFormWrapper = styled.View`
  width: 100%;
  align-items: center;
`;
