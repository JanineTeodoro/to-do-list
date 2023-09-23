import React from 'react';
import { Button, ContainerButton, TextButton } from './botao-style';

type ButtonProps = {
  title: string, 
}
const Botao: React.FC <ButtonProps> = ({title}) => {
  return (
    <ContainerButton>
      <Button>
        <TextButton>{title}</TextButton>
      </Button>
    </ContainerButton>
  );
};

export default Botao;

// Container Botão - View
// Botão Add - TouchableOpacity
// Texto - Text
