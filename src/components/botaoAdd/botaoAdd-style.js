import styled from "styled-components/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width

export const ContainerButton = styled.View`
  background: #fff;
  borderRadius: 12px;
  width: ${windowWidth * .8}px;
`;

export const Button = styled.TouchableOpacity`
  
  padding: 14px;
`;

export const TextButton = styled.Text`
  textAlign: center;
  color: #F79E89;
  textTransform: uppercase;
  fontSize: 20px;
`;