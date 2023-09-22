'use client';
import { useTContext } from '../context/Context';
import Header from '../component/Header';
import Bet from '../component/Bet';
import ConnectButton from '../component/ConnectButton';
import HistoryExpand from '../component/HistoryExpand';
import { storeHistory } from '../utils/utils';

const BetPage = () => {
  const { connect, history, setHistory } = useTContext();
  const data = storeHistory();

  const clear = () => {
    setHistory([]);
    data.clear();
  };
  return (
    <>
      <Header links={[{ name: 'Demo', url: '/demo' }]}>
        <ConnectButton />
      </Header>
      <main className="flex justify-center items-center grow lg:flex-col lg:gap-10">
        <section className="w-2/3">
          {connect ? (
            <Bet />
          ) : (
            <p className="text-cc2 text-4xl">Connect your wallet to bet</p>
          )}
        </section>
        <section className="w-1/3 self-start lg:self-center lg:w-2/3">
          {connect && <HistoryExpand history={history} clear={clear} />}
        </section>
      </main>
    </>
  );
};

export default BetPage;
