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

export const ContainerModal = styled(Container)`
  display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};

  background: #fff;
  position: fixed;
  z-index: 999;

  top: 10%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  height: auto;
  width: 100%;
  border-radius: 0.5rem;
  color: #fff;
  max-width: 600px;

  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%), 0 6px 15px 0 rgb(0 0 0 / 20%);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 2.5rem;
    background: #badc58;
    border-radius: inherit;
    svg {
      width: 20px;
      cursor: pointer;
      polygon {
        fill: #fff;
        transition: fill .3s;
      }
      &:hover polygon{
        fill: #fc5050;
      }
    }
  }
`;

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 900;
  display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};
  opacity: ${({ isModalOpen }) => (isModalOpen ? 1 : 0)};
`;
