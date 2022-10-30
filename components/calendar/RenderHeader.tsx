import { View, Text } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { format, addMonths } from "date-fns";
import { FontAwesome } from "@expo/vector-icons";

interface IRenderHeader {
  baseDay: Date;
  onPress: (e: any) => void;
}
const RenderHeader = ({ baseDay, onPress }: IRenderHeader) => {
  // console.log("헤더에 받은 현재 날짜", baseDay);

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
        alignItems: "center",
      }}
    >
      <View>
        <Text onPress={() => onPress("prev")}>
          <FontAwesome name="arrow-left" size={20} color="black" />
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>
          {format(baseDay, "MMM")}/{format(addMonths(baseDay, 1), "MMM")}
        </Text>
        <Text>
          {format(baseDay, "Y")}
          {format(baseDay, "Y") !== format(addMonths(baseDay, 1), "Y") && (
            <Text>/ {format(addMonths(baseDay, 1), "Y")}</Text>
          )}
        </Text>
      </View>
      <View>
        <Text onPress={() => onPress("next")}>
          <FontAwesome name="arrow-right" size={20} color="black" />
        </Text>
      </View>
    </View>
  );
};

export default RenderHeader;
