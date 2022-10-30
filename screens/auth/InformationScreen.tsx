import { View, Text } from "react-native";
import React from "react";
import { AuthScreenProps, RootStackScreenProps } from "types";
import LargeText from "components/ui/LargeText";
import styled from "styled-components/native";
import InformationForm from "components/InformationForm";
import Button from "components/ui/Button";
import { useNavigation } from "@react-navigation/native";
const InformationScreen = () => {
  const navigation = useNavigation<any>();
  const handlePress = () => {
    navigation.replace("Root");
  };

  return (
    <InformationScreenWrapper>
      <LargeText text="Mealti" />
      <InformationForm />
      <Button text="입력완료" onPress={handlePress} />
    </InformationScreenWrapper>
  );
};

export default InformationScreen;

const InformationScreenWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
