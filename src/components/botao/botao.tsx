import React from 'react';
import { ButtonAdd, ContainerButtonAdd, TextButtonAdd } from "./botao-style";

const Botao = (props: { title: string; width?: string; color: string }) => {
  return (
    <ContainerButtonAdd>
      <ButtonAdd color={props.color}>
        <TextButtonAdd>{props.title}</TextButtonAdd>
      </ButtonAdd>
    </ContainerButtonAdd>
  );
};

export default Botao;

// Container Botão - View
// Botão Add - TouchableOpacity
// Texto - Text
