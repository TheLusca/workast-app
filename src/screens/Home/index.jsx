import { TouchableOpacity } from "react-native";
import { KeyboardView, Container, Title, Text1, Text2 } from "./styles";
import React from "react";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();
  function openCard() {
    navigation.navigate('TrainingCard')
  }
  function openRegister() {
    navigation.navigate('TrainingRegister')
  }

  return (
    <KeyboardView>
      <Container>
        <Title></Title>

        <TouchableOpacity onPress={openCard}>
          <Text1 style={{ color: "white" }}>Acessar seu Treino</Text1>
        </TouchableOpacity>
        <TouchableOpacity onPress={openRegister}>
          <Text2 style={{ color: "white" }}>Cadastrar Treino</Text2>
        </TouchableOpacity>
      </Container>
    </KeyboardView>
  );
}

export default Home;
