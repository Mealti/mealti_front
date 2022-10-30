import React from "react";
import { RootTabScreenProps } from "types";
import { View } from "react-native";
import AccountMonth from "components/account/AccountMonth";
const Account = ({ navigation }: RootTabScreenProps<"Account">) => {
  return (
    <View>
      <AccountMonth />
    </View>
  );
};

export default Account;
