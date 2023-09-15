"use client";
import React, { useContext, useState } from "react";
import {
  getContractBalance,
  connectWallet,
  placeBet,
  ethToWei,
} from "./web3/web3Client";
import contractAddress from "./constants/address";
import { useTContext } from "../context/Context";

const Bet = () => {
  const { wallet,connect } = useTContext();
  const [contractBalance, setContractBalance] = useState("");
  const [multiplier, setMultiplier] = useState(2);

  const handleBet = (multiplier: number) => {
    placeBet(contractAddress, wallet, multiplier, 1000000000000000);
  };


  return (
    <>
      
      {connect && <button onClick={() => handleBet(multiplier)}>BET</button>}
      {!connect && <p>Connect wallet to proceed</p>}
      <button onClick={() => console.log(ethToWei(0.2))}>Console log WEI</button>
      <p>Multiplier: {multiplier}</p>
      <input
        type="range"
        value={multiplier}
        min={2}
        max={10}
        onChange={(e) => setMultiplier(Number(e.target.value))}
      />
    </>
  );
};

export default Bet;
