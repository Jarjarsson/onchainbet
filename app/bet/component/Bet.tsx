import React, { useEffect, useState } from 'react';

import contractAddress from '../constants/address';
import { useTContext } from '../../context/Context';
import { gameResult, getMaxBet, placeBet } from '../web3/web3Client';
import { ReturnValues } from '@/app/type';

const Bet = () => {
  const [multiplier, setMultiplier] = useState(2);
  const { wallet } = useTContext();
  const [amount, setAmount] = useState(0.000000001);
  const [maxAmount, setMaxAmount] = useState(0);
  const [loadingBet, setLoadingBet] = useState(false);
  const [result, setResult] = useState('');
  useEffect(() => {
    (async () => {
      setMaxAmount(await getMaxBet());
    })();
  }, []);
  useEffect(() => {
    gameResult((value: ReturnValues) => {
      setLoadingBet(false);
      setResult(value.status)
      console.log(value);
    }, wallet);
  }, [wallet]);

  const handleBet = (multiplier: number) => {
    setLoadingBet(true);
    setResult('');
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
      {loadingBet && <p>Getting result</p>}
      {result === '' ? <p></p> : <p>{result}</p> }
    </form>
  );
};

export default Bet;
