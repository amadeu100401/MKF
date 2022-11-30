import {
  BacktoLogin,
  ButtonContainer,
  Container,
  Content,
  Logo,
} from "./styles";
import logoImg from "../assets/logo.svg";

import { Link } from "react-router-dom";

export function RegistrationScreen() {
  return (
    <Container>
      <Logo src={logoImg} alt="logo" />

      <Content action="submit">
        <h2>Crie sua conta</h2>
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Nome"></input>
        <input type="text" placeholder="Senha"></input>
        <input type="text" placeholder="Confirmar Senha"></input>

        <BacktoLogin>
          <Link to={`/login`} className="links">
            Voltar ao Iníco
          </Link>
        </BacktoLogin>

        <ButtonContainer type="button">
          <Link to={`/login`} className="links">
            Cadastrar
          </Link>
        </ButtonContainer>
      </Content>
    </Container>
  );
}
