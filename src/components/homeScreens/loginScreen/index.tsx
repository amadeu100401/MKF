import {
  ButtonContainer,
  Container,
  Content,
  Logo,
  RegistrationContent,
  Title,
  Text,
  PasswordContent,
} from "./styles";
import logoImg from "../assets/logo.png";
import { Link } from "react-router-dom";

export function LoginScreen() {
  return (
    <Container>
      <Logo src={logoImg} alt="logo" />
      <Title>Monkey Finances</Title>
      <Text>Faça seu login e comece a usar</Text>
      <Content action="submit">
        <p>Endereço de Email</p>
        <input type="text" placeholder="email@exemple.com"></input>
        <p className="senha">Sua senha</p>
        <input type="text" placeholder="************"></input>
        <ButtonContainer type="button">
          <Link to={`/home`} className="links">
            Entrar na plataforma
          </Link>
        </ButtonContainer>
      </Content>
      <PasswordContent>
        <Link to={`/forgotPassword`} className="linkKey">
          <p className="missKey">Esqueceu a senha?</p>
        </Link>
      </PasswordContent>
      <RegistrationContent>
        <Link to={`/registration`} className="linkRegistration">
          <p>Não possui conta? Crie uma agora!</p>
        </Link>
      </RegistrationContent>
    </Container>
  );
}
