import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { connectWallet } from '../bet/web3/web3Client';

type ContextType = {
    wallet:string
};
const ContextDefaultValues: authContextType = {
    wallet:''
};
const TContext = createContext<ContextType>(ContextDefaultValues)

export const TContextProvider = ({children:})=>{
    const [wallet, setWallet]=useState('')

    useEffect(()=>{async()=>
        await connectWallet().then((res) => {
            setWallet(res.address);
    })},[wallet])

   
    return (
        <TContext.Provider value={{wallet, setWallet}}>{children}</TContext.Provider>
    )
}

export const useTContext = ()=>{useContext(TContext)}

