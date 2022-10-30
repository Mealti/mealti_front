import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
interface IButtonProps {
  text: string;
  onPress?: () => void;
  color?: string;
  backgroundColor?: string;
}
const Button = ({ text, onPress, color, backgroundColor }: IButtonProps) => {
  return (
    <ButtonWrapper>
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View>
          <ButtonText>{text}</ButtonText>
        </View>
      </TouchableOpacity>
    </ButtonWrapper>
  );
};
export default Button;

const ButtonWrapper = styled.View<{ backgroundColor: string }>`
  margin: 8px;
  border-radius: 30px;
  width: 90%;
  height: 50px;
  justify-content: center;
  /* opacity: ${({ pressed }: any) => (pressed ? 0.55 : 1)}; */
  background-color: ${(props) =>
    props.backgroundColor || props.theme.color.mainColor};
`;
const ButtonText = styled.Text`
  text-align: center;
  color: black;
  font-size: 16px;
  font-weight: bold;
`;
