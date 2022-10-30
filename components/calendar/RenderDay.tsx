import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
type dateType = {
  date: Date;
  isShow: boolean;
};
interface IRenderDayProps {
  date: dateType;
}
const RenderDay = ({ date }: IRenderDayProps) => {
  // console.log("renderDay", date);
  return (
    <View
      style={{
        marginTop: 3,
        alignItems: "center",
        // justifyContent: "center",
        height: 50,
        width: 50,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
      }}
      // style={{ flex: 1 }}
    >
      <RenderDayText isShow={date.isShow}>{date.date.getDate()}</RenderDayText>
    </View>
  );
};

export default RenderDay;

const RenderDayText = styled.Text`
  color: ${({ isShow }: any) => (isShow ? "black" : "gray")};
`;
