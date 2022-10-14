import React from "react";
import { RootTabScreenProps } from "types";
import { Text } from "components/Themed";

const MyPage = ({ navigation }: RootTabScreenProps<"MyPage">) => {
  return <Text>MyPage</Text>;
};

export default MyPage;
