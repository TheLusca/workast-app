import {
  KeyboardView,
  Container,
  Input,
  ButtomSubmit,
  TextButtom,
  Text1,
} from "./styles";
import { TouchableOpacity } from "react-native";
import Header from "../../components/index";
import React from "react";
import { useNavigation } from '@react-navigation/native';



function Login() {
  const navigation = useNavigation();
  
  function openScreen() {
    navigation.navigate('Register')
  }
  function openHome() {
    navigation.navigate('Home')
  }

  return (
    <KeyboardView>
      <Header />
      
      <Container>
        <Input placeholderTextColor="#fff" placeholder="Email" />

        <Input
          placeholderTextColor="#fff"
          placeholder="Senha"
          secureTextEntry
        />

        <ButtomSubmit onPress={openHome}>
          <TextButtom>Logar</TextButtom>
        </ButtomSubmit>
        <Text1>Não tem uma conta?</Text1>
        
        <TouchableOpacity>
          <Text1 style={{ color: "white" }} onPress={openScreen} >Cadastrar</Text1>
        </TouchableOpacity>
      </Container>
    </KeyboardView>
  );
}

export default Login;
