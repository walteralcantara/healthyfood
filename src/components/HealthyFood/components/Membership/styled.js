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

export const ContainerMembership = styled(Container)``;

export const ContentMembership = styled(Content)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 2rem;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0 0 0 1rem;
  }
`;

export const ImageMembership = styled(Image)`
  @media (max-width: 768px) {
    margin-right: -8rem;
  }
  @media (max-width: 425px) {
    margin-right: unset;
  }
`;

export const ContentTextMembership = styled(ContentText)`
  width: 500px;
  @media (max-width: 768px) {
    width: unset;
    margin: 0 1rem;
  }
`;

export const TitleMembership = styled(Title)`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const FormMembership = styled(Form)``;

export const ButtonMembership = styled(Button)`
  box-shadow: 0px 10px 13px -7px #badc58, 5px 4px 15px -2px rgba(0, 0, 0, 0);
`;

export const InputMembership = styled(Input)``;
