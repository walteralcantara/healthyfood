import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 0.5rem 2rem;
  color: #1d164d;
  font-family: 'Mulish', sans-serif;
  margin: 0 auto;
  max-width: 1360px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      margin: 2rem 0;
      color: #9e9baf;
      a:first-child,
      a + a {
        margin: 1rem;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      text-align: center;
      padding: unset;
    }

    @media (max-width: 425px) {
      a {
        display: block;
      }
    }
  }

  p {
    text-align: center;
    margin: 1rem 0;
    a {
      text-align: center;
      margin: 0 1rem;
    }
  }
`;
