import { createContext, useContext, useState, type ReactNode } from "react";

type RandomNumberContextValue = {
  randomNumber: number;
  generateRandomNumber: () => void;
};

const RandomNumberContext = createContext<RandomNumberContextValue | undefined>(
  undefined,
);

export function RandomNumberProvider({ children }: { children: ReactNode }) {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 90000) + 10000);
  };

  return (
    <RandomNumberContext.Provider
      value={{ randomNumber, generateRandomNumber }}
    >
      {children}
    </RandomNumberContext.Provider>
  );
}

export function useRandomNumber() {
  const ctx = useContext(RandomNumberContext);
  if (!ctx) {
    throw new Error(
      "useRandomNumber must be used within a RandomNumberProvider",
    );
  }
  return ctx;
}

export default RandomNumberContext;
