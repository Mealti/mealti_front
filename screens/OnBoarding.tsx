import React from "react";
import { AppRegistry, Image, View, Text } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import Button from "components/ui/Button";
import LargeText from "components/ui/LargeText";
import { useNavigation } from "@react-navigation/native";
const OnBoarding = () => {
  const navigation = useNavigation<any>(); // 화면 전환

  const handleClick = () => {
    navigation.replace("Login");
  };
  return (
    <Swiper
      showsButtons={false}
      dot={
        <View
          style={{
            backgroundColor: "rgba(0,0,0,.2)",
            width: 8,
            height: 8,
            borderRadius: 50,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 200,
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: "#ffbc58",
            width: 10,
            height: 10,
            borderRadius: 50,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 200,
          }}
        />
      }
    >
      <StartView>
        <TextView>
          <LargeText text="아끼는 식비" />
          <Text>식비를 절약하고</Text>
          <Text>계획적인 소비가 가능해요.</Text>
        </TextView>
        <ButtonView>
          <Button text="시작하기" onPress={handleClick}></Button>
        </ButtonView>
      </StartView>
      <StartView>
        <TextView>
          <LargeText text="메뉴도 추천 받고" />
          <Text>식사 메뉴가 고민될 때</Text>
          <Text>메뉴를 추천 받을 수 있어요.</Text>
        </TextView>
        <ButtonView>
          <Button text="시작하기" onPress={handleClick}></Button>
        </ButtonView>
      </StartView>
      <StartView>
        <TextView>
          <LargeText text="레시피도 공유하고" />
          <Text>레시피 공유와</Text>
          <Text>빠른 장보기가 가능해요</Text>
        </TextView>
        <ButtonView>
          <Button text="시작하기" onPress={handleClick}></Button>
        </ButtonView>
      </StartView>
    </Swiper>
  );
};

export default OnBoarding;

const StartView = styled.View`
  flex: 1;
  justify-content: center;
`;
const TextView = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const ButtonView = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
