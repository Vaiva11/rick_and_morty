import React, { createContext, useState, ReactNode } from "react";

interface ContextType {
  characterCount: number;
  setCharacterCount: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue: ContextType = {
  characterCount: 0,
  setCharacterCount: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
};

const Context = createContext<ContextType>(defaultValue);

const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [characterCount, setCharacterCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <Context.Provider
      value={{ characterCount, setCharacterCount, currentPage, setCurrentPage }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
