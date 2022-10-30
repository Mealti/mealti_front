import { View, Text, FlatList } from "react-native";
import React from "react";
import { RenderDay } from "components/calendar";
import styled from "styled-components";
interface IRenderMonthProps {
  monthList: any;
}
const RenderMonth = ({ monthList }: IRenderMonthProps) => {
  // console.log(monthList);
  return (
    // <RenderMonthWrapper>
    //   {monthList.map((el: Date | null, idx: React.Key | null | undefined) => {
    //     return <RenderDay date={el} key={idx} />;
    //   })}
    // </RenderMonthWrapper>

    <FlatList
      columnWrapperStyle={{ justifyContent: "space-around" }}
      data={monthList}
      renderItem={({ item }) => <RenderDay date={item} />}
      keyExtractor={(item, index) => item + index}
      numColumns={7}
    />
  );
};

export default RenderMonth;

const RenderMonthWrapper = styled(View)``;
