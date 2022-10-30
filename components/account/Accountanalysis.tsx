import { View, Text, FlatList } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Accountanalysis = () => {
  const analysis = [
    { title: "총식비", money: "50만원" },
    { title: "현재 사용 식비", money: "5만원" },
    { title: "남은 식비", money: "45만원" },
    { title: "적정 하루 식비", money: "1만 6천원" },
  ];
  return (
    <AccountanalysisWrapper>
      <CircleView width="300px">
        <Text>예산 분석</Text>
      </CircleView>
      <FlatList
        data={analysis}
        renderItem={({ item }) => (
          <CircleView>
            <Text>{item.title}</Text>
            <Text>{item.money}</Text>
          </CircleView>
        )}
        numColumns={2}
      />
    </AccountanalysisWrapper>
  );
};

export default Accountanalysis;

const AccountanalysisWrapper = styled.View`
  width: 90%;
  align-items: center;
  justify-content: space-between;
`;

const CircleView = styled.View<{ width: string }>`
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || "130px"};
  padding: 10px;
  margin: 5px;
  /* height: 100px; */
  background-color: rgba(255, 188, 88, 0.5);
  border-radius: 15px;
  border: 2px solid ${(props) => props.theme.color.mainColor};
`;
