'use client';
import Header from '../component/Header';
import ConnectButton from '../component/ConnectButton';
import HistoryExpand from '../component/HistoryExpand';
import { storeHistory } from '../utils/utils';
import BettingInterface from '../component/bettingInterface/BettingInterface';
import { useEffect, useRef, useState } from 'react';
import { gameResult, getMaxBet, placeBet } from './web3/web3Client';
import contractAddress from './constants/address';
import { HistoryItem, ReturnValues } from '../type';

const BetPage = () => {
  const [wallet, setWallet] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const amountRef = useRef(0);
  const [multiplier, setMultiplier] = useState(2);
  const tx = useRef('');
  const [maxAmount, setMaxAmount] = useState(0);
  const bettingHistory = storeHistory();

  useEffect(() => {
    (async () => {
      setMaxAmount(await getMaxBet());
    })();
  }, []);

  useEffect(() => {
    const bettingHistory = storeHistory();
    setHistory(bettingHistory.read());
  }, []);

  const clear = () => {
    setHistory([]);
    bettingHistory.clear();
  };

  const handleBet = async (multiplier: number, amount: number) => {
    amountRef.current = amount;
    setMultiplier(multiplier);
    const response = await placeBet(
      contractAddress,
      wallet,
      multiplier,
      amount
    );
    tx.current = response.tx;
    setMaxAmount(await getMaxBet());
    return { status: response.status };
  };

  const handleResult = async (cb: (number: number) => Promise<void>) => {
    gameResult(async (value: ReturnValues) => {
      const data: HistoryItem = {
        amount: amountRef.current,
        transaction: tx.current,
        multiplier,
        status: value.status,
      };
      await cb(Number(value.outcome));
      bettingHistory.update(data);
      setHistory(bettingHistory.read());
    }, wallet);
  };

  return (
    <>
      <Header links={[{ name: 'Demo', url: '/demo' }]}>
        <ConnectButton cb={setWallet} />
      </Header>
      <main className="flex justify-center items-center grow lg:flex-col lg:gap-10">
        {wallet === '' ? (
          <p className="text-cc3">Connect Metamask wallet to continue</p>
        ) : (
          <BettingInterface
            handleBet={handleBet}
            maxAmount={maxAmount}
            handleResult={handleResult}
          />
        )}

        <section className="w-1/3 self-start lg:self-center lg:w-2/3">
          {wallet !== '' && <HistoryExpand history={history} clear={clear} />}
        </section>
      </main>
    </>
  );
};

export default BetPage;
