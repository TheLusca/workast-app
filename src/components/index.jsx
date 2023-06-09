import { Image } from 'react-native';
import { Container, Title} from './styles';
import Logo from '../../assets/logo.png';
import { StyleSheet } from 'react-native';


function Header() {
   return(
    <Container>
        <Title>Seu Treino na Palma da Mão!</Title>
        <Image 
        style={{width: 350, height: 350}}
        source = { Logo }
        
        />
    </Container>
   )
}

export default Header