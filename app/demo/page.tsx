"use client";
import { useState } from "react";
import { playGame } from "./backend";

const Demo = () => {
  const [bet, setBet] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [result, setResult] = useState(0);

  const handleBet = () => {
    const r = playGame(bet, multiplier);
    setResult(r);
  };

  return (
    <>
      <p>Bet</p>
      <input
        value={bet}
        onChange={(event) => setBet(Number(event.target.value))}
      />

      <p>Multiplier</p>
      <input
        value={multiplier}
        onChange={(event) => setMultiplier(Number(event.target.value))}
      />

      <button onClick={handleBet}>BET</button>
      <p>{result}</p>
    </>
  );
};

export default Demo;
function fromRandomNumberToSuccess(bet: number, multiplier: number) {
  throw new Error("Function not implemented.");
}
