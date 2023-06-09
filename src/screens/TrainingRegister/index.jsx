import {
    KeyboardView,
    Container,
    Input,
    ButtomSubmit,
    TextButtom,
    Title,
    Text1
    
  } from "./styles";
  import React from "react";

  
  function TrainingRegister() {
    return (
      <KeyboardView>
        
        <Container>
            <Title>Cadastrar Treino</Title>
            <Input placeholderTextColor="#fff" placeholder="Nome do Exercicio" />
            <Input placeholderTextColor="#fff" placeholder="Dia da Semana" />
            <Input placeholderTextColor="#fff" placeholder="Carga" />
            <Input placeholderTextColor="#fff" placeholder="Repetições" />



          <ButtomSubmit>
            <TextButtom>Salvar Treino</TextButtom>
          </ButtomSubmit>
        
        </Container>
      </KeyboardView>
    );
  }
  
  export default TrainingRegister;
  