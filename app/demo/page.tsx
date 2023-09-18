"use client";
import { useEffect, useState } from "react";
import { playGame, getPlayerBalance } from "./backend";
import Image from "next/image";

const Demo = () => {
  const [bet, setBet] = useState(0);
  const [multiplier, setMultiplier] = useState(2);
  const [result, setResult] = useState(0);
  const [playerbalance, setPlayerbalance] = useState(0);

  useEffect(() => {
    setPlayerbalance(getPlayerBalance());
  }, []);

  const handleBet = () => {
    const r = playGame(bet, multiplier);
    setResult(r.amount);
    setPlayerbalance(getPlayerBalance());
  };

  return (
    <>
      <header>
        <Image
          src="/logo.png"
          alt="logo"
          width={60}
          height={60}
          className="rounded-md"
        />
      </header>
      <main className="flex gap-2">
        <p>Bet</p>
        <input
          value={bet}
          onChange={(event) => setBet(Number(event.target.value))}
        />
      </main>
      <div className="flex gap-2">
        <p>Multiplier</p>
        <select
          value={multiplier}
          onChange={(event) => setMultiplier(Number(event.target.value))}
        >
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>

      <button onClick={handleBet}>BET</button>
      <p>This is the result: {result}</p>
      <p>PlayerBalance: {playerbalance}</p>
    </>
  );
};

export default Demo;
