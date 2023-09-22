import { SelectMultiplier } from './SelectMultiplier';
import { DisplayNumber } from './DisplayNumber';
import { useState } from 'react';
import { Result } from '@/app/type';

type Prop = {
  handleBet: (multiplier: number, amount: number) => Promise<Result>;
  maxAmount: number;
};

const BettingInterface = ({ handleBet, maxAmount }: Prop) => {
  const [multiplier, setMultiplier] = useState(2);
  const [amount, setAmount] = useState(1);
  const [activeNumber, setActiveNumber] = useState(1);

  const counter = () => {
    let counter = 0;
    const increase = () => {
      if (counter === 100) {
        counter = 0;
      }
      counter++;
      setActiveNumber(counter);
    };
    const getCounter = () => counter;
    const setCounter = (number: number) => {
      counter = number;
    };
    return { increase, getCounter, setCounter };
  };
  const count = counter();

  const start = (startNumber: number) => {
    count.setCounter(startNumber);
    const timerId = setInterval(() => {
      count.increase();
    }, 50);
    return timerId;
  };

  const runNTimes = (arr: number[]) =>
    arr.reduce((acc, cur) => {
      setTimeout(() => {
        count.increase();
      }, cur + acc);
      return cur + acc;
    });

  const stop = (timerId: NodeJS.Timeout) => {
    clearInterval(timerId);
  };

  const retard = (len: number) =>
    [...Array(len).keys()].map(i => 50 + i * 1.15 * 15);

  const slowDown = (number: number, timeoutId: NodeJS.Timeout) => {
    stop(timeoutId);
    const diff = getDiff(count.getCounter(), number);
    let loopDuration: number;
    if (diff > 20) {
      loopDuration = runNTimes(Array(diff - 20).fill(50));
    } else {
      loopDuration = runNTimes(Array(diff + 80).fill(50));
    }
    setTimeout(() => {
      const durs = retard(22);
      runNTimes(durs);
    }, loopDuration);
  };

  const getDiff = (current: number, target: number) =>
    (target - current + 100) % 100;

  const onBet = async () => {
    const t = start(1);
    const { number } = await handleBet(multiplier, amount);
    slowDown(number, t);
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
