import { CalendarDate } from "components/account/CalendarDate";
import { Text, View } from "react-native";
import { addMonths, subMonths } from "date-fns";
import React, { useState, useEffect } from "react";
import { RenderHeader, RenderDays, RenderMonth } from "components/calendar";

const AccountMonth = () => {
  const INITDAY = 5;
  const offset = 1000 * 60 * 60 * 9; //한국 시간으로 바꾸기 위해
  const today = new Date(new Date().getTime() + offset);
  const [baseDay, setBaseDay] = useState(
    new Date(new Date().getTime() + offset)
  ); // 달력의 기반이 되는 날짜

  const [monthList, setMonthList] = useState<any>(
    CalendarDate({ date: baseDay }).datesOfMonth
  ); // 월별 달력에 넘길 데이터
  const handlePress = (e: any) => {
    if (e === "prev") {
      setBaseDay(subMonths(baseDay, 1));
    } else {
      setBaseDay(addMonths(baseDay, 1));
    }
  };
  useEffect(() => {
    setMonthList(CalendarDate({ date: baseDay }).datesOfMonth);
  }, [baseDay]);
  return (
    <View
      style={{
        marginVertical: 10,
        width: "95%",
        alignItems: "center",
        backgroundColor: "#FF9F10",
        borderRadius: 15,
        borderColor: "grey",
        borderWidth: 1,
      }}
    >
      <View
        style={{
          marginVertical: 20,
          width: "90%",
          alignItems: "center",
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "grey",
          borderRadius: 15,
        }}
      >
        <RenderHeader onPress={handlePress} baseDay={baseDay} />
        <View
          style={{
            width: "80%",
          }}
        >
          <RenderDays />
          <RenderMonth monthList={monthList} />
        </View>
      </View>
    </View>
  );
};

export default AccountMonth;
