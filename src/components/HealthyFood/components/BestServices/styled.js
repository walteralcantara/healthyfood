import styled from 'styled-components';

import {
  Container,
  Content,
  Image,
  ContentText,
  Title,
  Subtitle,
  Form,
  Button,
  Input,
} from '../../styled';

export const ContainerBestServices = styled(Container)``;

export const SubtitleBestServices = styled(Subtitle)``;

export const FormBestServices = styled(Form)``;

export const InputBestServices = styled(Input)``;

export const ImageBestRecipeCard = styled.div``;

export const ContentBestServices = styled(Content)`
  display: flex;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ImageBestServices = styled(Image)`
  width: 60%;
`;

export const ContentTextBestServices = styled(ContentText)`
  max-width: 450px;
  color: #bcbcbc;
  align-self: center;
  padding: 0 2rem;

  p {
    font-size: 1.6rem;
    line-height: 27px;
    margin: 1.5rem 0;
    font-family: 'Mulish', sans-serif;

    & + p {
      margin: 1.5rem 0;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      line-height: 14px;
      & + p {
        margin: 1rem 0;
      }
    }
    @media (max-width: 670px) {
      font-size: 1rem;
      line-height: 14px;
      & + p {
        margin: 1rem 0;
      }
    }
    @media (max-width: 425px) {
      font-size: 1.6rem;
      line-height: 27px;
      margin: 1.5rem 0;
      & + p {
        margin: 1rem 0;
      }
    }
  }
`;

export const TitleBestServices = styled(Title)`
  @media (max-width: 768px) {
    text-align: center;
    margin: 1rem 0;
    font-size: 2.5rem;
  }
  @media (max-width: 670px) {
    font-size: 2rem;
    margin: 0.5rem 0;
  }
  @media (max-width: 425px) {
    font-size: 3.2rem;
    margin: 1rem 0;
  }
`;

export const ButtonBestServices = styled(Button)`
  box-shadow: 0px 10px 13px -7px #badc58, 5px 4px 15px -2px rgba(0, 0, 0, 0);

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 670px) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 425px) {
    padding: 1rem 2rem;
  }
`;
