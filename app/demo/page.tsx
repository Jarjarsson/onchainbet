'use client';
import { useEffect, useState } from 'react';
import { playGame, getPlayerBalance, getPool } from './backend';
import BettingForm from '../component/BettingForm';
import HistoryExpand from '../component/HistoryExpand';
import { HistoryItem } from '../type';
import Header from '../component/Header';

const Demo = () => {
  const [status, setStatus] = useState('');
  const [playerbalance, setPlayerbalance] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [demoHis, setDemoHis] = useState<HistoryItem[]>([]);

  useEffect(() => {
    setPlayerbalance(getPlayerBalance());
  }, []);

  const handleBet = async (multiplier: number, amount: number) => {
    const r = playGame(amount, multiplier);
    setStatus(r.status);
    setPlayerbalance(getPlayerBalance());
    setShowResult(true);
    const data: HistoryItem = { ...r, multiplier, transaction: '' };
    setDemoHis([...demoHis, data]);
  };

  const handlePlayAgain = () => {
    setShowResult(false);
  };

  return (
    <>
      <Header links={[{ name: 'Bet on the blockchain', url: '/bet' }]}>
        <p className="px-2 py-2 font-semibold text-cc2 bg-cc3/20 rounded-md select-none">
          Your Balance: {playerbalance.toFixed(4)}
        </p>
      </Header>

      <main className="flex justify-center items-center grow lg:flex-col lg:gap-10">
        <section className="'w-2/3">
          {!showResult && (
            <BettingForm handleBet={handleBet} maxAmount={getPool() / 12} />
          )}
          {showResult && (
            <div>
              <p>{status}</p>
              <button onClick={handlePlayAgain}>Play Again</button>
            </div>
          )}
        </section>
        <section className="w-1/3 self-start lg:self-center lg:w-2/3">
          <HistoryExpand history={demoHis} clear={() => setDemoHis([])} />
        </section>
      </main>
    </>
  );
};

export default Demo;
