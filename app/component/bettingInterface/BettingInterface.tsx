import { SelectMultiplier } from './SelectMultiplier';
import { DisplayNumber } from './DisplayNumber';
import { useState } from 'react';
import { Result, ReturnValues } from '@/app/type';
import { animator } from '@/app/utils/utils';

type Prop = {
  handleBet: (multiplier: number, amount: number) => Promise<void>;
  maxAmount: number;
  handleResult: (cb: (number: ReturnValues) => void) => void;
};

const BettingInterface = ({ handleBet, maxAmount, handleResult }: Prop) => {
  const [multiplier, setMultiplier] = useState(2);
  const [amount, setAmount] = useState(1);
  const [activeNumber, setActiveNumber] = useState(1);

  const animation = animator(setActiveNumber);

  const onBet = async () => {
    await handleBet(multiplier, amount);
    const t = animation.start(1);
    handleResult((number: ReturnValues) => {
      animation.slowDown(Number(number.outcome), t);
    });
  };

  return (
    <section>
      <form
        onSubmit={e => {
          e.preventDefault();
          onBet();
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
              active={activeNumber === i + 1}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BettingInterface;
