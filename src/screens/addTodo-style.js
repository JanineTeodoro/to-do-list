import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get("window").height
const windowWidth = Dimensions.get("window").width

export const AddContainer = styled.View`
  backgroundColor: #F79E89;
  height: 100%;
  justifyContent: flex-start;
  alignItems: center;
  gap: 20px;
  paddingTop: 20px;
`

export const TextInputTitle = styled.TextInput`
 maxHeight: ${windowHeight * .05}px;
 width: ${windowWidth * .9}px;
 color: #fff;
 borderRadius: 12px;
 borderWidth: 2px;
 padding: 10px;
 flex: 1 0 100%;
 fontSize: 16px;
`

export const TextInputDescription = styled.TextInput`
maxHeight: ${windowHeight * .50}px;
width: ${windowWidth * .9}px;
color: #fff;
borderRadius: 12px;
borderWidth: 2px;
padding: 10px;
flex: 1 0 100%;
fontSize: 16px;
textAlignVertical: top;
`

