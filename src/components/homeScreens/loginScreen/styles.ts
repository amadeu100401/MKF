import styled from "styled-components";

export const Container = styled.header`
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
    font-size: 1.3rem;
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
  width: 20%;
  padding: 0.2rem 0.8rem;
  margin-top: 12%;
  margin-bottom: 1rem;

  @media (max-width: 1080px) {
    font-size: 93.75%;
    width: 50%;
  }
  @media (min-width: 2080px) {
    width: 12%;
  }
`;

export const Title = styled.h2`
  color: var(--shape);
  font-size: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 1080px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  color: var(--gray);
  font-size: 1.3rem;
  @media (max-width: 1080px) {
    font-size: 1rem;
  }
`;

export const Content = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 42%;
  padding: 2rem 0.1rem;
  margin-top: 2rem;
  border-radius: 0.7rem;

  @media (max-width: 720px) {
    width: 87%;
    margin-bottom: 3rem;
    padding: 0.4rem 0.1rem;
  }
  @media (max-width: 1080px) {
    width: 90%;
  }
  @media (min-width: 2080px) {
    width: 22%;
  }

  p {
    color: var(--shape);
    text-align: start;
    font-weight: 600;
    font-size: 1.4rem;
    margin-right: 0%;
    margin-left: 7%;

    @media (max-width: 1080px) {
      width: 90%;
      font-size: 95.75%;
      margin-right: 0%;
      margin-left: 2%;
    }

    @media (max-width: 2080px) {
      width: 90%;
      font-size: 95.75%;
    }
  }
  .senha {
    margin-top: 2rem;
    @media (max-width: 1080px) {
      width: 90%;
      font-size: 95.75%;
    }
  }

  input {
    width: 85%;
    padding: 0 1.5rem;
    height: 4rem;
    color: var(--shape);
    background: var(--bkg);

    border-radius: 0.6rem;
    border: 0;
    font-weight: 400;
    font-size: 1.1rem;
    border-color: var(--background);

    margin-top: 1rem;
    @media (max-width: 1080px) {
      width: 90%;
      font-size: 95.75%;
    }

    &::placeholder {
      color: var(--gray);
    }

    & + input {
      margin-top: 1rem;
    }
  }
`;

export const ButtonContainer = styled.button`
  width: 85%;
  padding: 1rem;
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

  @media (max-width: 1080px) {
    width: 90%;
    font-size: 1.2rem;
  }

  margin-top: 3rem;
  transition: filter 0.2s;
  color: var(--shape);
  &:hover {
    filter: brightness(1.2);
  }
  strong {
    font-weight: 600;
    &:hover {
      color: var(--shape);
    }
  }
`;

export const RegistrationContent = styled.div`
  width: 70%;
  margin-top: 1.5rem;
  font-size: 1.1rem;
  text-align: center;

  .linkRegistration {
    color: var(--gray);
  }
`;

export const PasswordContent = styled.div`
  width: 70%;
  margin-top: 0.8rem;
  font-size: 1.1rem;
  text-align: center;

  @media (max-width: 1080px) {
    margin-top: 0rem;
  }

  .linkKey {
    color: var(--gray);
  }
`;
