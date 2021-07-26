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

export const ContainerBestRecipes = styled(Container)`
  background: #fafafc;
`;

export const ContentBestRecipes = styled(Content)`
  max-width: 1260px;
`;

export const ImageBestRecipes = styled(Image)`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  text-align: center;
  margin: 2rem 2rem;
  justify-content: center;
`;

export const ContentTextBestRecipes = styled(ContentText)`
  text-align: center;
`;

export const TitleBestRecipes = styled(Title)``;

export const SubtitleBestRecipes = styled(Subtitle)`
  color: #9e9baf;
  font-weight: normal;
`;

export const FormBestRecipes = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 3rem 0 0 0;
`;

export const ButtonBestRecipes = styled(Button)`
  background: #badc58;
  border: 0;
  padding: 0.5rem;
  border-radius: 0.3rem;
`;

export const InputBestRecipes = styled(Input)`
  padding: 0.7rem;
  border-radius: 0.3rem;
  width: 80%;
  border: 1px solid #222;

  &::placeholder {
    opacity: 0.5;
  }
`;

export const ImageBestRecipeCard = styled.div`
  display: flex;
  align-items: center;
  max-width: 480px;
  text-align: left;
  color: #1d164d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 15px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;

  img {
    max-width: unset;
    min-width: 130px;
    min-height: 118px;

    @media (max-width: 768px) {
      max-width: 100%;
      display: block;
    }
  }

  & > div:last-child {
    padding: 4rem 1rem 0 1rem;

    button {
      border: 0;
      background: #badc58;
      margin: 1rem 0;
      padding: 1rem 2rem;
      color: #fff;
      border-radius: 0.3rem;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      padding: 0 1rem 0 1rem;

      h2 {
        font-size: 1.5rem;
      }

      button {
        margin: 0.5rem 0 0 0;
        padding: 0.5rem 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    min-width: 480px;
  }
  @media (max-width: 425px) {
    min-width: unset;
  }
`;
