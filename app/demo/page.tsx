'use client';
import { useEffect, useRef, useState } from 'react';
import { playGame, getPlayerBalance, getPool } from './backend';

import HistoryExpand from '../component/HistoryExpand';
import { HistoryItem, Result } from '../type';
import Header from '../component/Header';
import BettingInterface from '../component/bettingInterface/BettingInterface';
import { getTime, randomArray } from '../utils/utils';

const Demo = () => {
  const [playerbalance, setPlayerbalance] = useState(0);
  const [demoHis, setDemoHis] = useState<HistoryItem[]>([]);
  const [multiplierLocal, setMultiplierLocal] = useState(2);
  const localResult = useRef<Result>({ amount: 0, number: 0, status: 'Loss' });
  const rndArray = useRef<number[]>(randomArray(100));

  useEffect(() => {
    setPlayerbalance(getPlayerBalance());
  }, []);

  const handleBet = async (multiplier: number, amount: number) => {
    setMultiplierLocal(multiplier);
    const out = playGame(amount, multiplier);
    localResult.current = out;
    return { status: 'Success!' };
  };

  const handleResult = (cb: (number: number) => void) => {
    const randomNumber = Math.random() * 5000;
    setTimeout(async () => {
      const data: HistoryItem = {
        ...localResult.current,
        multiplier: multiplierLocal,
        transaction: '',
        time: getTime(),
      };
      await cb(localResult.current.number);
      setPlayerbalance(getPlayerBalance());
      setDemoHis([...demoHis, data]);
    }, randomNumber);
  };

  return (
    <>
      <Header links={[{ name: 'Bet with Ethereum', url: '/bet' }]}>
        <p className="px-2 py-2 font-semibold text-cc2 bg-cc3/20 rounded-md select-none">
          Your Balance: {playerbalance.toFixed(4)}
        </p>
      </Header>
      <main className="flex gap-4 flex-1">
        <section className='w-2/3 flex flex-col items-center justify-center gap-4 px-6'>
        <BettingInterface
          handleBet={handleBet}
          maxAmount={Number((getPool() / 12).toFixed(5))}
          handleResult={handleResult}
          rndArray={rndArray.current}
        />
        </section>
        <section className="w-1/3">
          <HistoryExpand history={demoHis} clear={() => setDemoHis([])} />
        </section>
      </main>
    </>
  );
};

export default Demo;
