import React from 'react';

import { ContainerModal, Overlay } from './styled';

import { useContextAPI } from '../../../../context/ContextAPI';
import RegisterForm from '../RegisterForm';
export default function Modal() {
  const { isModalOpen, toggleModal } = useContextAPI();

  return (
    <>
      <ContainerModal isModalOpen={isModalOpen}>
        <header>
          <h1>Register</h1>

          <i onClick={toggleModal}>
            <svg viewBox='0 0 357 357'>
              <polygon points='357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5' />
            </svg>
          </i>
        </header>
        <main>
          <RegisterForm />
        </main>
      </ContainerModal>
      <Overlay isModalOpen={isModalOpen} />
    </>
  );
}
