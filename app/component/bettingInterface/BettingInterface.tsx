import { SelectMultiplier } from './SelectMultiplier';
import { DisplayNumber } from './DisplayNumber';
import { useState } from 'react';

type Prop = {
  handleBet: (multiplier: number, amount: number) => Promise<void>;
  maxAmount: number;
};

const BettingInterface = ({ handleBet, maxAmount }: Prop) => {
  const [multiplier, setMultiplier] = useState(2);
  const [amount, setAmount] = useState(1);
  const [activeNumber, setActiveNumber] = useState(1);
  const [timeout, setTimeout] = useState<NodeJS.Timeout | null>(null);

  const start = () => {
    setActiveNumber(1);
    const intervalB = setInterval(() => {
      setActiveNumber(prevNumber => {
        if (prevNumber === 100) {
          return 1;
        }
        return prevNumber + 1;
      });
    }, 50);
    setTimeout(intervalB);
  };
  const stop = () => {
    if (timeout) {
      clearInterval(timeout);
    }
  };

  const onResult = (result: number) => {
    stop();
    setActiveNumber(result);
    // show win/loss animation;
  };

  const slowDown = (current: number, winNumber: number) => {};

  return (
    <section>
      <form
        onSubmit={() => {
          start();
          handleBet(multiplier, amount);
        }}
      >
        <label htmlFor="multiplierRange">Bet Amount </label>

        <input
          id="multiplierRange"
          type="range"
          value={amount}
          min={0.00001}
          max={maxAmount.toFixed(5)}
          step={0.00001}
          onChange={e => setAmount(Number(e.target.value))}
        />
        <p>Bet amount: {amount} ETH</p>
        <button>BET</button>
      </form>
      <div className="flex">
        <div className="flex flex-col">
          {[2, 4, 8, 10].map(i => (
            <SelectMultiplier
              key={i + 'mul'}
              setMultiplier={value => {
                setMultiplier(value);
              }}
              multiplier={i}
              betAmount={amount}
            ></SelectMultiplier>
          ))}
        </div>
        <ul className="grid grid-cols-10 gap-1">
          {[...Array(100).keys()].map(i => (
            <DisplayNumber
              key={i + 'grid'}
              num={i + 1}
              winnable={88 / multiplier < i + 1}
              active={activeNumber === i}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BettingInterface;
