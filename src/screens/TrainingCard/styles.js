import styled from "styled-components/native";

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #333;
`;
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  width: 90%;
`;

export const Title = styled.Text`
color: azure;
font-size: 20px;
font-weight: bold;

`

export const Input = styled.TextInput`
border: 2px solid #fff
margin-bottom: 30px;
padding: 15px 20px;
color: #fff;
font-size: 20px;
border-radius: 9px;
width: 90%;
`;

export const ButtomSubmit = styled.TouchableOpacity`
background-color: #DC143C
border-radius: 9px;
width: 90%;
padding: 20px;
align-items: center;

`;

export const TextButtom = styled.Text`
  color: azure;
  font-size: 20px;
  font-weight: bold;
`;

export const Text1 = styled.Text`
  font-size: 14px;
  color: #6a7dfe;
`;
