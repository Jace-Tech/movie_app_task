import React, { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProps {
  setIsModalOpen: (state: boolean) => void;
  isModalOpen: boolean;
}
const ModalContext = createContext({} as ModalContextProps); 

interface ModalContextProviderProps {
  children: ReactNode;
} 

const ModalContextProvider: React.FC<ModalContextProviderProps> = ({ children }) => { 
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return ( 
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}> 
      {children} 
    </ModalContext.Provider> 
  )
}

export default ModalContextProvider

export const useModalContext = () => useContext(ModalContext);