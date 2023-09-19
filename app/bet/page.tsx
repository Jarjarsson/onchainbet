'use client';
import { useTContext } from '../context/Context';
import Header from '../component/Header';
import Bet from '../component/Bet';
import { checkConnection } from './web3/web3Client';
import { useEffect } from 'react';
import ConnectButton from '../component/ConnectButton';
import HistoryExpand from '../component/HistoryExpand';

const BetPage = () => {
  const { connect, wallet, setWallet, setConnect } = useTContext();

  useEffect(() => {
    (async () => {
      await checkConnection(setWallet);
      if (wallet !== '') {
        setConnect(true);
      }
    })();
  }, [wallet, setWallet, setConnect]);
  return (
    <>
      <Header />
      <main className="flex grow">
        <section className="flex flex-col w-1/4  gap-3 px-4">
          <ConnectButton />
          {connect && <HistoryExpand />}
        </section>
        <section className="flex flex-col justify-center items-center w-3/4">
          <Bet />
        </section>
      </main>
    </>
  );
};

export default BetPage;
