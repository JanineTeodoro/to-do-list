import styled from "styled-components/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width

export const ContainerButton = styled.View`
  background: #F79E89;
  borderRadius: 12px;
  width: ${windowWidth * .9}px;
`;

export const Button = styled.TouchableOpacity`
  
  padding: 14px;
`;

export const TextButton = styled.Text`
  textAlign: center;
  color: #fff;
  textTransform: uppercase;
  fontSize: 20px;
  textShadow: 0 4px 13px #00000040;
`;
