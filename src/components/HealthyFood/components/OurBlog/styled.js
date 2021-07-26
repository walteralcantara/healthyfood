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

export const ContainerOurBlog = styled(Container)`
  background: #fafafc;
`;

export const ContentOurBlog = styled(Content)`
  padding: 3rem 0;
`;

export const ImageOurBlog = styled(Image)`
  cursor: grabbing;

  div[tabindex] {
    /* border: 1px solid #f00; */
    padding: 0.25rem;
    min-height: 395px;
  }

  button {
    background: #fff;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex !important;
    align-items: center;
    justify-content: center;
    &:before {
      /* margin: 3px 0 0 0; */
    }
  }
`;

export const ContentTextOurBlog = styled(ContentText)`
  text-align: center;
`;

export const TitleOurBlog = styled(Title)``;

export const SubtitleOurBlog = styled(Subtitle)`
  color: #9e9baf;
  font-weight: normal;
  padding: 2rem 0;
`;

export const FormOurBlog = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 3rem 0 0 0;
`;

export const ButtonOurBlog = styled(Button)`
  background: #badc58;
  border: 0;
  padding: 0.5rem;
  border-radius: 0.3rem;
`;

export const InputOurBlog = styled(Input)`
  padding: 0.7rem;
  border-radius: 0.3rem;
  width: 80%;
  border: 1px solid #222;

  &::placeholder {
    opacity: 0.5;
  }
`;

export const ImageBlogCard = styled.div`
  display: flex;
  align-items: center;
  max-width: 350px;
  text-align: left;
  color: #1d164d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 15px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.7rem;

  h3 {
    padding: 2rem 3rem 1rem 2rem;
  }

  /* & > div:first-child {
    padding: 4rem 1rem 0 1rem;

    button {
      border: 0;
      background: #BADC58;
      margin: 1rem 0;
      padding: 1rem 2rem;
      color: #fff;
      border-radius: .3rem;
      cursor: pointer;
    }
  } */

  & div:last-child {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    span {
      margin: 0 1rem;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  content: '';
  bottom: 0;
  width: 25%;
  height: 150px;
  background: linear-gradient(270deg, #c4c4c4 0%, rgba(196, 196, 196, 0) 100%);
`;
