import {
    KeyboardView,
    Container,
    Input,
    ButtomSubmit,
    TextButtom,
    Title,
    Text1
    
  } from "./styles";
  import { TouchableOpacity } from "react-native";
  import React from "react";
  import { useNavigation } from '@react-navigation/native';

  
  function Register() {

    const navigation = useNavigation();
  function openScreen() {
    navigation.navigate('Login')
  }

    return (
      <KeyboardView>
        
        <Container>
            <Title>Criar Conta</Title>
          <Input placeholderTextColor="#fff" placeholder="Email" />
          <Input placeholderTextColor="#fff" placeholder="Username" />
          <Input
            placeholderTextColor="#fff"
            placeholder="Senha"
            secureTextEntry
          />
  
          <ButtomSubmit>
            <TextButtom>Registrar</TextButtom>
          </ButtomSubmit>
          <Text1>Já tem conta?</Text1>
          <TouchableOpacity>
          <Text1 style={{ color: "white" }} onPress={openScreen} >Logar</Text1>
        </TouchableOpacity>
        </Container>
      </KeyboardView>
    );
  }
  
  export default Register;
  