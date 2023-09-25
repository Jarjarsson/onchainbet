import { SelectMultiplier } from './SelectMultiplier';
import { DisplayNumber } from './DisplayNumber';
import { useState } from 'react';
import { animator } from '@/app/utils/utils';

type Prop = {
  handleBet: (
    multiplier: number,
    amount: number
  ) => Promise<{ status: string }>;
  maxAmount: number;
  handleResult: (cb: (number: number) => Promise<void>) => void;
  rndArray: number[];
};

const BettingInterface = ({
  handleBet,
  maxAmount,
  handleResult,
  rndArray,
}: Prop) => {
  const [multiplier, setMultiplier] = useState(2);
  const [amount, setAmount] = useState(0.00001);
  const [activeNumber, setActiveNumber] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const animation = animator(setActiveNumber);

  const onBet = async () => {
    setButtonDisabled(true);
    const result = await handleBet(multiplier, amount);
    if (result.status === 'Success!') {
      const t = animation.start(0);
      handleResult(async (number: number) => {
        const winningIndex = rndArray.indexOf(Number(number));
        console.log({ win: Number(number) });
        await animation.slowDown(winningIndex, t);
        setButtonDisabled(false);
      });
    } else {
      setButtonDisabled(false);
    }
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
        <button disabled={buttonDisabled}>BET</button>
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
          {rndArray.map((num, i) => (
            <DisplayNumber
              key={i + 'grid'}
              num={num}
              winnable={88 / multiplier < num}
              active={activeNumber === i}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BettingInterface;
