import { ButtonContainer, Container, Content, Logo, Title } from "./styles";
import logoImg from "../assets/logo.svg";
import { Link } from "react-router-dom";

export function ForgotPasswordScreen() {
  return (
    <Container>
      <Logo src={logoImg} alt="logo" />
      <Title>Recuperar Senha</Title>
      <Content action="submit">
        <p>
          Esqueceu sua senha? Digite seu e-mail que enviaremos um link para
          definir uma nova senha.
        </p>
        <input type="text" placeholder="E-mail"></input>
        <ButtonContainer type="button">
          <Link to={`/login`} className="links">
            <strong>Recuperar</strong>
          </Link>
        </ButtonContainer>
      </Content>
    </Container>
  );
}
