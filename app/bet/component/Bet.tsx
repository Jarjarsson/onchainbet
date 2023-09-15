import React, { useEffect, useState } from 'react';

import contractAddress from '../constants/address';
import { useTContext } from '../../context/Context';
import { gameResult, getMaxBet, placeBet } from '../web3/web3Client';

const Bet = () => {
  const [multiplier, setMultiplier] = useState(2);
  const { wallet } = useTContext();
  const [amount, setAmount] = useState(0.000000001);
  const [maxAmount, setMaxAmount] = useState(0);
  useEffect(() => {
    (async () => {
      setMaxAmount(await getMaxBet());
    })();
    gameResult(value => {
      console.log(value);
    });
  }, []);

  const handleBet = (multiplier: number) => {
    console.log(amount);
    if (amount > 0) {
      placeBet(contractAddress, wallet, multiplier, amount);
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleBet(multiplier);
      }}
      className="flex flex-col"
    >
      <label htmlFor="multiplierRange">Multiplier {multiplier}:</label>
      <input
        id="multiplierRange"
        type="range"
        value={multiplier}
        min={2}
        max={10}
        onChange={e => setMultiplier(Number(e.target.value))}
      />
      <label htmlFor="betAmount">Bet Amount (max bet: {maxAmount})</label>
      <input
        id="betAmount"
        required
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
        type="number"
        step={0.000000001}
        min={0.000000001}
        max={maxAmount}
        // onBeforeInput = {
        //   (e) => ["e", "E", "+", "-"].includes(e.currentTarget) && e.preventDefault()
        // }
      />
      <button> Place bet </button>
    </form>
  );
};

export default Bet;
