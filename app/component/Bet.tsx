import React, { useEffect, useState } from 'react';

import contractAddress from '../bet/constants/address';
import { useTContext } from '../context/Context';
import { getMaxBet, placeBet } from '../bet/web3/web3Client';
import BettingResult from './BettingResult';
import BettingForm from './BettingForm';

const Bet = () => {
  const { wallet, setLoadingBet, showResult, setShowResult } = useTContext();
  const [amount, setAmount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);
  const [maxAmount, setMaxAmount] = useState(0);
  const [tx, setTx] = useState('');

  useEffect(() => {
    (async () => {
      setMaxAmount(await getMaxBet());
    })();
  }, []);

  const handleBet = async (multiplier: number, amount: number) => {
    setAmount(amount);
    setMultiplier(multiplier);
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
      {showResult ? (
        <BettingResult amount={amount} transaction={tx} multiplier={multiplier} />
      ) : (
        <BettingForm handleBet={handleBet} maxAmount={maxAmount} />
      )}
    </>
  );
};

export default Bet;
