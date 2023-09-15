'use client'
import React, { useState } from "react";
import { getContractBalance, connectWallet, placeBet, ethToWei } from "./web3/web3Client";
import contractAddress from "./constants/address";

const Bet = () => {
  const [address, setAddress] = useState("");
  const [wallet, setWallet] = useState("");
  const [contractBalance, setContractBalance]=useState("")
  const [multiplier,setMultiplier]=useState(0)

  const handleBet = (multiplier: number) => {
     placeBet(contractAddress, wallet,  multiplier, 1000000000000000);
  };
  


  const handleSelectWallet = async () => {
    await connectWallet().then((res) => {
      setWallet(res.address);
    });
  };

  return (
    <>
      <p>Multiplier</p>
      <select name="multiplier" onChange={(e)=>{setMultiplier(Number(e.target.value))}}>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <button onClick={() => handleBet(multiplier)}>BET</button><p>{wallet}</p>;
      <button onClick={() => handleSelectWallet()}>CONNECT</button>
      <button onClick={() => console.log(ethToWei(0.2))}>test</button>
    </>
  );
};

export default Bet;
