import React, { createContext, ReactNode, useContext } from "react";
import ModalContextProvider from "./ModalContext";
import MovieContextProvider from "./MovieContext";

interface GlobalContextProps { }
const GlobalContext = createContext({} as GlobalContextProps);

interface GlobalContextProviderProps {
  children: ReactNode;
}

const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  return (
    <GlobalContext.Provider value={{}}>
      <MovieContextProvider>
        <ModalContextProvider>
          {children}
        </ModalContextProvider>
      </MovieContextProvider>
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider

export const useGlobalContext = () => useContext(GlobalContext);