'use client';
import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { connectWallet } from '../bet/web3/web3Client';

type ContextType = {
  wallet: string;
  setWallet: (address: string) => void;
  connect: boolean;
  setConnect: (statuse: boolean) => void;
};

type Props = {
  children: React.ReactNode;
};

const ContextDefaultValues: ContextType = {
  wallet: '',
  setWallet: () => {},
  connect: false,
  setConnect: () => {},
};
const TContext = createContext<ContextType>(ContextDefaultValues);

export const TContextProvider = ({ children }: Props) => {
  const [wallet, setWallet] = useState('');
  const [connect, setConnect] = useState(false);

  return (
    <TContext.Provider value={{ wallet, setWallet, connect, setConnect }}>
      {children}
    </TContext.Provider>
  );
};

export const useTContext = () => useContext(TContext);
