import React, { createContext, useState, useContext } from 'react';

export const ContextAPI = createContext();

export function ContextAPIProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <ContextAPI.Provider
      value={{
        isModalOpen,
        toggleModal,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
}

export const useContextAPI = () => {
  return useContext(ContextAPI);
};
