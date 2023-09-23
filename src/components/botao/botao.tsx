import React from 'react';
import { Button, ContainerButton, TextButton } from './botao-style';
import { GestureResponderEvent } from 'react-native';

type ButtonProps = {
  title: string, 
  onPress?: (event: GestureResponderEvent) => void
}
const Botao: React.FC <ButtonProps> = ({title, onPress}) => {
  return (
    <ContainerButton>
      <Button onPress={onPress}>
        <TextButton>{title}</TextButton>
      </Button>
    </ContainerButton>
  );
};

export default Botao;

// Container Botão - View
// Botão Add - TouchableOpacity
// Texto - Text
