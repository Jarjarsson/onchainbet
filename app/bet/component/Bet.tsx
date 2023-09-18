import React, { useEffect, useState } from "react";

import contractAddress from "../constants/address";
import { useTContext } from "../../context/Context";
import { gameResult, getMaxBet, placeBet, weiToEth } from "../web3/web3Client";
import { ReturnValues } from "@/app/type";
import Result from "./result";

const Bet = () => {
  const [multiplier, setMultiplier] = useState(2);
  const { wallet, loadingBet, setLoadingBet, showResult, setShowResult } =
    useTContext();
  const [amount, setAmount] = useState(0.000000001);
  const [maxAmount, setMaxAmount] = useState(0);
  useEffect(() => {
    (async () => {
      setMaxAmount(await getMaxBet());
    })();
  }, []);
  // useEffect(() => {
  //   gameResult((value: ReturnValues) => {
  //     setLoadingBet(false);
  //     setResult(value.status);
  //     setPrize(weiToEth(Number(value.amount)));
  //     console.log(value);
  //   }, wallet);
  // }, [wallet]);

  const handleBet = async (multiplier: number) => {
    if (amount > 0) {
      const status = await placeBet(
        contractAddress,
        wallet,
        multiplier,
        amount
      );
      console.log(status);
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
            // onBeforeInput = {
            //   (e) => ["e", "E", "+", "-"].includes(e.currentTarget) && e.preventDefault()
            // }
          />
          <button> Place bet </button>
          {/* {loadingBet && <p>Getting result</p>}
      {result === "" ? (
        <p></p>
      ) : (
        <p>
          You {result}, Prize: {prize}
        </p>
      )} */}
        </form>
      )}
      {showResult && <Result />}
    </>
  );
};

export default Bet;
