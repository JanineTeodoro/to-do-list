import styled from "styled-components/native";

export const ContainerButtonAdd = styled.View`
  display: flex;
`;

export const ButtonAdd = styled.TouchableOpacity`
  background: ${({ color }) => color};
  width: ${({ width }) => (width !== "" ? width : "200px")};
  height: 10px;
`;

export const TextButtonAdd = styled.Text``;
