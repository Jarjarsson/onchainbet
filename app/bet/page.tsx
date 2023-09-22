'use client';
import { useTContext } from '../context/Context';
import Header from '../component/Header';
import Bet from '../component/Bet';
import ConnectButton from '../component/ConnectButton';
import HistoryExpand from '../component/HistoryExpand';
import { storeHistory } from '../utils/utils';
import BettingInterface from '../component/bettingInterface/BettingInterface';
import { useEffect, useState } from 'react';
import { gameResult, getMaxBet, placeBet } from './web3/web3Client';
import contractAddress from './constants/address';
import { HistoryItem, ReturnValues } from '../type';

const BetPage = () => {
  const { connect, history, wallet, setHistory } = useTContext();
  const [amount, setAmount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);
  const [tx, setTx] = useState('');
  const [maxAmount, setMaxAmount] = useState(0);

  const bettingHistory = storeHistory();

  useEffect(() => {
    (async () => {
      setMaxAmount(await getMaxBet());
    })();
  }, []);

  const clear = () => {
    setHistory([]);
    bettingHistory.clear();
  };

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
    }
  };

  const handleResult = (cb: (number: ReturnValues) => void) => {
    gameResult((value: ReturnValues) => {
      const data: HistoryItem = {
        amount,
        transaction: tx,
        multiplier,
        status: value.status,
      };
      cb(value)
      setHistory(bettingHistory.read());
      bettingHistory.update(data);
    }, wallet);
  };

  return (
    <>
      <Header links={[{ name: 'Demo', url: '/demo' }]}>
        <ConnectButton />
      </Header>
      <main className="flex justify-center items-center grow lg:flex-col lg:gap-10">
        <BettingInterface
          handleBet={handleBet}
          maxAmount={maxAmount}
          handleResult={handleResult}
        />
        {/* <section className="w-2/3">
          {connect ? (
            <Bet />
          ) : (
            <p className="text-cc2 text-4xl">Connect your wallet to bet</p>
          )}
        </section> */}
        <section className="w-1/3 self-start lg:self-center lg:w-2/3">
          {connect && <HistoryExpand history={history} clear={clear} />}
        </section>
      </main>
    </>
  );
};

export default BetPage;
