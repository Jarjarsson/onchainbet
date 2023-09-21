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

  const start = () => {
    setActiveNumber(1);
    const timerId = setInterval(() => {
      setActiveNumber(prevNumber => {
        if (prevNumber === 100) {
          return 1;
        }
        return prevNumber + 1;
      });
    }, 50);
    return timerId;
  };

  const stop = (timerId: NodeJS.Timeout) => {
    clearInterval(timerId);
  };

  const slowDown = (number: number) => {
    const diff = getDiff(activeNumber, number);
    if (diff > 20) {
      // loop diff - 20 times
    } else {
      // keep going for 100 + diff - 20 number of times at full speed
    }
  
    // loop 20 times with increasing wait time;
    
    // [...Array(10).keys()].map(i => 50+i*50)
    const linear = (endpoint: number) => {
      let arr = [];
      for (let i = 1; i <= endpoint; i++) {
        arr.push(i * 50);
      }
      return arr;
    };
    linear(10).map(t => {
      const tId = start();
      setTimeout(() => {
        stop(tId);
      }, t);
    });
  };

  const getDiff = (current: number, target: number) =>
    (target - current + 100) % 100;

  const onBet = async () => {
    const t = start();
    const data = await handleBet(multiplier, amount);
    const { number } = data;
    stop(t);
    slowDown(number);
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
        <button onClick={start}>start</button>
        {/* <button onClick={}>stop</button> */}
      </div>
    </section>
  );
};

export default BettingInterface;
