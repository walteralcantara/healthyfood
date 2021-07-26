import styled from 'styled-components';

import {
  Container,
  Content,
  Image,
  ContentText,
  Title,
  Form,
  Button,
  Input,
} from '../../styled';

export const ContainerIntro = styled(Container)``;

export const ImageIntro = styled(Image)``;

export const ContentIntro = styled(Content)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding-left: 1rem;
  }
`;

export const ContentTextIntro = styled(ContentText)`
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const TitleIntro = styled(Title)`
  font-size: 4.8rem;
  color: #1d164d;
`;

export const FormIntro = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 2rem 0 0 0;
  height: 5rem;
  max-width: 450px;

  @media (max-width: 425px) {
    margin: 0 1rem;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const ButtonIntro = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #badc58;
  border: 0;
  border-radius: 0.3rem;
  height: 100%;
  width: 5rem;
  padding: unset;

  & img {
    min-width: 2rem;
  }
`;

export const InputIntro = styled(Input)`
  margin: 0 0.5rem 0 0;
  border: 1px solid #2d3561;
  height: 100%;
  padding: 1rem;
  width: 100%;
`;
