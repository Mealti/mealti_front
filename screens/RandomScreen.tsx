import React from "react";
import { RootTabScreenProps } from "types";
import { Text, View } from "react-native";

const Random = ({ navigation }: RootTabScreenProps<"Random">) => {
  return (
    <View>
      <Text>RandomScreen</Text>
    </View>
  );
};

export default Random;
