'use client';
import { useTContext } from '../context/Context';
import Header from '../component/Header';
import Bet from '../component/Bet';
import { checkConnection } from './web3/web3Client';
import { useEffect } from 'react';
import ConnectButton from '../component/ConnectButton';
import HistoryExpand from '../component/HistoryExpand';
import { storeHistory } from '../utils/utils';

const BetPage = () => {
  const { connect, wallet, setWallet, setConnect, history, setHistory } =
    useTContext();
  const data = storeHistory();
  useEffect(() => {
    (async () => {
      await checkConnection(setWallet);
      if (wallet !== '') {
        setConnect(true);
      }
    })();
  }, [wallet, setWallet, setConnect]);
  const clear = () => {
    setHistory([]);
    data.clear();
  };
  return (
    <>
      <Header />
      <main className="flex grow">
        <section className="flex flex-col w-1/4  gap-3 px-4">
          <ConnectButton />
          {connect && <HistoryExpand history={history} clear={clear} />}
        </section>
        <section className="flex flex-col justify-center items-center w-3/4">
          <Bet />
        </section>
      </main>
    </>
  );
};

export default BetPage;
