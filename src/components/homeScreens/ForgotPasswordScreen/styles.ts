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
  margin-bottom: 2rem;

  @media (max-width: 720px) {
    width: 100%;
  }
  @media (max-width: 1080px) {
    font-size: 93.75%;
    width: 95%;
  }
  @media (min-width: 2080px) {
    width: 35%;
  }
`;

export const Title = styled.h2`
  color: var(--shape);
`;

export const Content = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 42%;
  padding: 2rem 0.1rem;
  margin-top: 2rem;
  background: var(--bkg);
  border-radius: 0.7rem;

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
  p {
    display: inline;
    width: 80%;
    color: var(--shape);
    margin-top: 0.5rem;
    text-align: center;

    margin-bottom: 1.5rem;
    font-size: 1rem;
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
    border-color: var(--background);
    background: var(--background);

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
  padding: 1.5rem;
  height: 4rem;
  background: var(--purple);
  border-radius: 0.5rem;

  border: 0;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;

  .links {
    color: var(--shape);
    text-decoration: none;
    font-weight: 500;
  }

  margin-top: 1.2rem;
  transition: filter 0.2s;
  color: var(--shape);
  &:hover {
    filter: brightness(1.2);
  }
  strong {
    font-weight: 500;
    &:hover {
      color: var(--shape);
    }
  }
`;
