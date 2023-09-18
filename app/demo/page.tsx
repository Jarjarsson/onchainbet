"use client";
import { useEffect, useState } from "react";
import { playGame, getPlayerBalance, getPool } from "./backend";
import Image from "next/image";
import BettingForm from "../component/BettingForm";

const Demo = () => {
  const [result, setResult] = useState(0);
  const [playerbalance, setPlayerbalance] = useState(0);

  useEffect(() => {
    setPlayerbalance(getPlayerBalance());
  }, []);

  const handleBet = async (multiplier: number, amount: number) => {
    const r = playGame(amount, multiplier);
    console.log({amount, multiplier, r});
    setResult(r.amount);
    setPlayerbalance(getPlayerBalance());
  };

  return (
    <>
      <header>
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="rounded-md"
        />
      </header>
      <BettingForm handleBet={handleBet} maxAmount={getPool()/12}/>
      <p className="text-cc3">This is the result: {result}</p>
      <p className="text-cc3">PlayerBalance: {playerbalance}</p>
    </>
  );
};

export default Demo;
