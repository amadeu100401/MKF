import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 1080px) {
    font-size: 93.75%;
    flex-direction: column;
  }
  @media (max-width: 2080px) {
    font-size: 93.75%;
    flex-direction: column;
    margin-top: -2rem;
    margin-bottom: 2rem;
  }
  @media (min-width: 2080px) {
    font-size: 93.75%;
    flex-direction: column;
    margin-top: -1rem;
    margin-bottom: 3rem;
  }
`;

export const Logo = styled.img`
  width: 50%;
  padding: 0.2rem 0.8rem;
  margin-top: 4rem;

  @media (max-width: 720px) {
    width: 100%;
  }
  @media (max-width: 1080px) {
    font-size: 93.75%;
    width: 90%;
  }
  @media (min-width: 2080px) {
    width: 35%;
  }
`;

export const Content = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 42%;
  padding: 2rem 0.1rem;
  margin-top: 4rem;

  border-radius: 1rem;

  @media (max-width: 720px) {
    width: 87%;
    margin-bottom: 3rem;
  }
  @media (max-width: 1080px) {
    font-size: 93.75%;
    width: 95%;
  }
  @media (min-width: 2080px) {
    font-size: 93.75%;
    width: 24%;
  }

  h2 {
    width: 70%;
    color: var(--shape);
    margin-right: 7.8%;
    text-align: start;
    margin-bottom: 1.5rem;
  }

  input {
    width: 80%;
    padding: 0 1.5rem;
    height: 4rem;
    color: var(--shape);

    border-radius: 0.6rem;
    border: 0;
    font-weight: 400;
    font-size: 1rem;
    background: var(--bkg);

    &::placeholder {
      color: var(--shape);
    }

    & + input {
      margin-top: 1rem;
    }
  }
`;

export const ButtonContainer = styled.button`
  width: 80%;
  padding: 1.3rem;
  height: 4rem;
  background: var(--purple);
  border-radius: 0.5rem;
  border: 0;
  font-size: 1.4rem;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  @media (max-width: 3080px) {
    font-size: 1.2rem;
  }

  .links {
    color: var(--shape);
    text-decoration: none;
    font-weight: 500;
  }
  transition: filter 0.2s;
  color: var(--shape);
  &:hover {
    filter: brightness(1.2);
  }
`;

export const BacktoLogin = styled.div`
  width: 90%;
  border: 0;
  padding: 0.8rem;

  margin-top: 0.8rem;
  text-align: end;
  margin-right: 8%;

  p {
    width: 100%;
    font-weight: 500;
  }

  .links {
    transition: filter 0.2;
    color: var(--purple);
    text-decoration: none;
    font-weight: 700;
    &:hover {
      filter: brightness(1.2);
      cursor: pointer;
    }
  }
`;
