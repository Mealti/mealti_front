import React from "react";
import { AuthScreenProps, RootTabScreenProps } from "types";
import { Text, View } from "components/Themed";
import { Button } from "react-native";
const FoodExpenses = ({ navigation }: any) => {
  const handlePress = () => {
    navigation.navigate("Root");
  };
  return (
    <View>
      <Text>식비 입력하세요</Text>
      <Button title="식비" onPress={handlePress} />
    </View>
  );
};

export default FoodExpenses;
