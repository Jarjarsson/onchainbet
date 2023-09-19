import React, { useEffect, useState } from "react";

import contractAddress from "../bet/constants/address";
import { useTContext } from "../context/Context";
import { getMaxBet, placeBet } from "../bet/web3/web3Client";
import Result from "./result";

const Bet = () => {
  const [multiplier, setMultiplier] = useState(2);
  let { wallet, setLoadingBet, showResult, setShowResult } = useTContext();
  const [amount, setAmount] = useState(0.000000001);
  const [maxAmount, setMaxAmount] = useState(0);
  const [tx, setTx] = useState("");

  useEffect(() => {
    (async () => {
      setMaxAmount(await getMaxBet());
    })();
  }, []);

  const handleBet = async (multiplier: number) => {
    if (amount > 0) {
      const response = await placeBet(
        contractAddress,
        wallet,
        multiplier,
        amount
      );
      setTx(response.tx);
      setMaxAmount(await getMaxBet());
      setLoadingBet(true);
      setShowResult(true);
    }
  };

  return (
    <>
      {!showResult && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleBet(multiplier);
          }}
          className="flex flex-col text-cc3 gap-2"
        >
          <label htmlFor="multiplierRange">Multiplier {multiplier}:</label>
          <input
            id="multiplierRange"
            type="range"
            value={multiplier}
            min={2}
            max={10}
            onChange={(e) => setMultiplier(Number(e.target.value))}
          />
          <label htmlFor="betAmount">Bet Amount (max bet: {maxAmount})</label>
          <input
            className="text-black"
            id="betAmount"
            required
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            type="number"
            step={0.000000001}
            min={0.000000001}
            max={maxAmount}
          />
          <button> Place bet </button>
        </form>
      )}
      {showResult && <Result amount={amount} transaction={tx} />}
    </>
  );
};

export default Bet;
