"use client";
import { useEffect, useState } from "react";
import { playGame, getPlayerBalance, getPool } from "./backend";
import Image from "next/image";
import BettingForm from "../component/BettingForm";

const Demo = () => {
  const [status, setStatus] = useState("");
  const [playerbalance, setPlayerbalance] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setPlayerbalance(getPlayerBalance());
  }, []);

  const handleBet = async (multiplier: number, amount: number) => {
    const r = playGame(amount, multiplier);
    console.log({ amount, multiplier, r });
    console.log(getPool() / 12);
    setStatus(r.status);
    setPlayerbalance(getPlayerBalance());
    setShowResult(true);
  };

  const handlePlayAgain = () => {
    setShowResult(false);
  };

  return (
    <>
      <header className="flex justify-between px-8 py-2 items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="rounded-md"
        />
        <p className="px-2 py-1 font-semibold text-cc3 bg-cc3/50 rounded-md h-2/3">
          Your Balance: <br></br>
          {playerbalance}
        </p>
      </header>

      <main className="flex justify-center items-center w-50">
        {!showResult && (
          <BettingForm handleBet={handleBet} maxAmount={getPool() / 12} />
        )}
        {showResult && (
          <div>
            <p>{status}</p>
            <button onClick={handlePlayAgain}>Play Again</button>
          </div>
        )}
      </main>
    </>
  );
};

export default Demo;
