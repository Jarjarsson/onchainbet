import React, { useState } from "react";
import { connectWallet, placeBet } from "./web3/web3Client";
import contractAddress from "./constants/address";

const Bet = () => {
  const [address, setAddress] = useState("");
  const [wallet, setWallet] = useState("");

  const handleBet = (multiplier: number) => {
    placeBet(contractAddress, address, multiplier, 0);
  };

  const handleSelectWallet = async () => {
    await connectWallet().then((res) => {
      setWallet(res.address);
    });
  };

  return (
    <>
      <button onClick={() => handleBet(3)}></button>;<p>{wallet}</p>;
      <button onClick={() => handleSelectWallet()}></button>;
    </>
  );
};

export default Bet;
