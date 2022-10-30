import { View, Text, FlatList } from "react-native";
import React from "react";

const RenderDays = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    <FlatList
      // columnWrapperStyle={{ justifyContent: "space-around" }}
      data={days}
      renderItem={({ item }) => (
        <View
          style={{
            // flex: 1,
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            width: 50,
            borderBottomColor: "grey",
            borderBottomWidth: 1,
          }}
        >
          <Text
          // style={{ width: "12%", alignItems: "center" }}
          >
            {item}
          </Text>
        </View>
      )}
      numColumns={7}
    />
  );
};

export default RenderDays;
