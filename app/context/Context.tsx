"use client";
import React, { useState } from "react";
import { createContext, useContext } from "react";

type ContextType = {
  wallet: string;
  setWallet: (address: string) => void;
  connect: boolean;
  setConnect: (statuse: boolean) => void;
  loadingBet: boolean;
  setLoadingBet: (statuse: boolean) => void;
  showResult: boolean;
  setShowResult: (statuse: boolean) => void;
};

type Props = {
  children: React.ReactNode;
};

const ContextDefaultValues: ContextType = {
  wallet: "",
  setWallet: () => {},
  connect: false,
  setConnect: () => {},
  loadingBet: false,
  setLoadingBet: () => {},
  showResult: false,
  setShowResult: () => {},
};
const TContext = createContext<ContextType>(ContextDefaultValues);

export const TContextProvider = ({ children }: Props) => {
  const [wallet, setWallet] = useState("");
  const [connect, setConnect] = useState(false);
  const [loadingBet, setLoadingBet] = useState(false);
  const [showResult, setShowResult] = useState(false);

  return (
    <TContext.Provider
      value={{
        wallet,
        setWallet,
        connect,
        setConnect,
        loadingBet,
        setLoadingBet,
        showResult,
        setShowResult,
      }}
    >
      {children}
    </TContext.Provider>
  );
};

export const useTContext = () => useContext(TContext);
