import React from "react";
import { RootTabScreenProps } from "types";
import { FlatList, ScrollView, Text, View } from "react-native";
import AccountMonth from "components/account/AccountMonth";
import Accountanalysis from "components/account/Accountanalysis";
import styled from "styled-components/native";
const Main = ({ navigation }: RootTabScreenProps<"Main">) => {
  return (
    <ScrollView>
      <MainWrapper>
        <AccountMonth />
        <Accountanalysis />
      </MainWrapper>
    </ScrollView>
  );
};

export default Main;

const MainWrapper = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;
