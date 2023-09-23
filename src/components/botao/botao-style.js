import styled from "styled-components/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width

export const ContainerButton = styled.View`
  display: flex;
`;

export const Button = styled.TouchableOpacity`
  width: ${windowWidth * .8}px;
  backgroundColor: #F79E89;
  padding: 14px;
`;

export const TextButton = styled.Text`
  textAlign: center;
  color: #ffffff;
  textTransform: uppercase;
  fontSize: 20px;
  fontWeight: 800;
`;
