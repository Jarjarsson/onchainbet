'use client'
import React, { useContext, useState } from "react";
import { getContractBalance, connectWallet, placeBet, ethToWei } from "./web3/web3Client";
import contractAddress from "./constants/address";

const Bet = () => {
  const [address, setAddress] = useState("");
  const [wallet, setWallet] = useState("");
  const [contractBalance, setContractBalance]=useState("")
  const [multiplier,setMultiplier]=useState(2)
  

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

      <button onClick={() => handleBet(multiplier)}>BET</button><p>{wallet}</p>;
      <button onClick={() => handleSelectWallet()}>CONNECT</button>
      <button onClick={() => console.log(ethToWei(0.2))}>test</button>

    
      <p>{multiplier}</p>
      <input type="range" value={multiplier} min={2} max={10} onChange={e => setMultiplier(Number(e.target.value))} />
    </>
  );
};

export default Bet;
