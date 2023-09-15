"use client";
import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { connectWallet } from "../bet/web3/web3Client";

type ContextType = {
  wallet: string;
  setWallet: (address: string) => void;
};

type Props = {
  children: React.ReactNode;
};

const ContextDefaultValues: ContextType = {
  wallet: "",
  setWallet: () => {},
};
const TContext = createContext<ContextType>(ContextDefaultValues);

export const TContextProvider = ({ children }: Props) => {
  const [wallet, setWallet] = useState("");

  //   useEffect(() => {
  //     async () =>
  //       await connectWallet().then((res) => {
  //         setWallet(res.address);
  //       });
  //     console.log(wallet);
  //   }, [wallet]);

  return (
    <TContext.Provider value={{ wallet, setWallet }}>
      {children}
    </TContext.Provider>
  );
};

export const useTContext = () => useContext(TContext);
