import React, { createContext, useState, ReactNode } from "react";

interface CharacterCountContextType {
  characterCount: number;
  setCharacterCount: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue: CharacterCountContextType = {
  characterCount: 0,
  setCharacterCount: () => {},
};

const CharacterCountContext =
  createContext<CharacterCountContextType>(defaultValue);

const CharacterCountProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [characterCount, setCharacterCount] = useState<number>(0);

  return (
    <CharacterCountContext.Provider
      value={{ characterCount, setCharacterCount }}
    >
      {children}
    </CharacterCountContext.Provider>
  );
};

export { CharacterCountContext, CharacterCountProvider };
