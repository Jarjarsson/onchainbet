'use client';
import { useEffect, useState } from 'react';
import { playGame, getPlayerBalance, getPool } from './backend';
import Image from 'next/image';
import BettingForm from '../component/BettingForm';
import Link from 'next/link';

const Demo = () => {
  const [status, setStatus] = useState('');
  const [playerbalance, setPlayerbalance] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setPlayerbalance(getPlayerBalance());
  }, []);

  const handleBet = async (multiplier: number, amount: number) => {
    const r = playGame(amount, multiplier);
    setStatus(r.status);
    setPlayerbalance(getPlayerBalance());
    setShowResult(true);
  };

  const handlePlayAgain = () => {
    setShowResult(false);
  };

  return (
    <>
      <header className="flex justify-between px-8 py-2 items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="rounded-md"
        />
        <nav className="flex gap-3">
          <Link
            href={'/'}
            className="text-cc3 text-xl font-semibold bg-cc3/50 px-3 py-2 rounded-lg"
          >
            HOME
          </Link>
          <Link
            href={'/bet'}
            className="text-cc3 text-xl font-semibold bg-cc3/50 px-3 py-2 rounded-lg"
          >
            BET
          </Link>
        </nav>
      </header>

      <main className="flex grow">
        <section className="flex flex-col w-1/4 items-center gap-3">
          <p className="px-2 py-1 font-semibold text-cc3 bg-cc3/50 rounded-md w-3/4 text-sm">
            Your Balance: <br></br>
            {playerbalance}
          </p>
          <p className="px-2 py-1 font-semibold text-cc3 bg-cc3/50 rounded-md w-3/4 text-sm">
            History
          </p>
        </section>
        <section className='flex flex-col justify-center items-center w-3/4'>
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
      </main>
    </>
  );
};

export default Demo;
