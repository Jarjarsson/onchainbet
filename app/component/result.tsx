import { ReturnValues } from '@/app/type';
import React, { useState } from 'react';
import { gameResult, weiToEth } from '../bet/web3/web3Client';
import { useTContext } from '@/app/context/Context';
import { storeHistory } from '../utils/utils';

type ResultProp = {
  amount: number;
  transaction: string;
  multiplier: number;
};

const Result = ({ amount, transaction, multiplier }: ResultProp) => {
  const { wallet, setLoadingBet, loadingBet, setShowResult, setHistory } =
    useTContext();
  const [result, setResult] = useState('');
  const [prize, setPrize] = useState(0);
  const history = storeHistory();

  gameResult((value: ReturnValues) => {
    setLoadingBet(false);
    setResult(value.status);
    setPrize(weiToEth(Number(value.amount)));
    const data = { amount, transaction, multiplier, status: value.status };
    history.update(data);
    setHistory(history.read());
  }, wallet);

  const handlePlayAgain = () => {
    setShowResult(false);
  };

  return (
    <div>
      {loadingBet && <p className="text-cc3">Getting result</p>}
      {result === '' ? (
        <p></p>
      ) : (
        <div>
          <p className="text-cc3">
            You {result}, Prize: {prize}
          </p>
          <button
            onClick={handlePlayAgain}
            className="text-cc3 bg-cc3/50 rounded-lg px-4 py-2"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Result;
