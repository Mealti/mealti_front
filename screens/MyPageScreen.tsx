import React from "react";
import { RootTabScreenProps } from "types";

import { View, Text } from "react-native";

const MyPageScreen = ({ navigation }: RootTabScreenProps<"MyPage">) => {
  return (
    <View>
      <Text>MyPageScreen</Text>
    </View>
  );
};

export default MyPageScreen;
