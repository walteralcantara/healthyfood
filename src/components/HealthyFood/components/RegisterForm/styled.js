import styled from 'styled-components';

import { Button } from '../../../HealthyFood/styled';

export const Form = styled.form`
  padding: 2rem 4rem;
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 425px) {
    div:nth-child(1),
    div:nth-child(2),
    div:nth-child(3),
    div:nth-child(4) {
      grid-column: 1 / 3;
    }
    padding: 1rem;
  }
`;

export const ButtonSubmit = styled(Button)`
  width: 100%;
  grid-column: 1 / 3;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  &:hover {
    filter: brightness(0.9)
  }
  &:disabled {
    opacity: .6;
    cursor:not-allowed;
  }
`;

export const Success = styled.h1`
  padding: 2rem;
  color: #1D164D;
  button {
    margin: 2rem 0;
  }
`
