import React from 'react';
import { Button, ContainerButton, TextButton } from './botaoAdd-style';
import { GestureResponderEvent } from 'react-native';

type ButtonProps = {
  title: string, 
  onPress?: (event: GestureResponderEvent) => void
}
const BotaoAdd: React.FC <ButtonProps> = ({title, onPress}) => {
  return (
    <ContainerButton>
      <Button onPress={onPress}>
        <TextButton>{title}</TextButton>
      </Button>
    </ContainerButton>
  );
};

export default BotaoAdd;

// Container Botão - View
// Botão Add - TouchableOpacity
// Texto - Text
