'use client'
import React, { useState } from "react";
import { connectWallet, placeBet } from "./web3/web3Client";
import contractAddress from "./constants/address";

const Bet = () => {
  const [address, setAddress] = useState("");
  const [wallet, setWallet] = useState("");

  const handleBet = (multiplier: number) => {
    // placeBet(contractAddress, address,  100000, 2);
  };

  const handleSelectWallet = async () => {
    await connectWallet().then((res) => {
      setWallet(res.address);
    });
  };

  return (
    <>
      <button onClick={() => handleBet(3)}>BUTTON</button>;helllo<p>{wallet}</p>;
      <button onClick={() => handleSelectWallet()}>CONNECT</button>
    </>
  );
};

export default Bet;
