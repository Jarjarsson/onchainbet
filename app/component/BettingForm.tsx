import { useState } from 'react';

type Props = {
  handleBet: (multiplier: number, amount: number) => Promise<void>;
  maxAmount: number;
};

const BettingForm = ({ handleBet, maxAmount }: Props) => {
  const [multiplier, setMultiplier] = useState(2);
  const [amount, setAmount] = useState(maxAmount);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleBet(multiplier, amount);
      }}
      className="flex flex-col text-cc3 gap-10 items-center p-5 bg-cc3/10 rounded-md"
    >
      <div className="flex flex-col gap-7">
        <div className="flex gap-3">
          <label htmlFor="multiplierRange">Multiplier </label>
          <input
            id="multiplierRange"
            type="range"
            value={multiplier}
            min={2}
            max={10}
            onChange={e => setMultiplier(Number(e.target.value))}
          />
          <p>{multiplier}</p>
        </div>
        <div>
        <div className="flex gap-3">
          <label htmlFor="betAmount">Bet Amount</label>
          <input
            className="text-cc3 bg-cc1/30 border-none px-2 rounded-md"
            id="betAmount"
            required
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            type="number"
            step={0.000000001}
            min={0.000000001}
            max={maxAmount}
          />
        </div>
        <p>{`max bet: ${maxAmount}`}</p>
        </div>
        
        
      </div>

      <button className="text-3xl bg-cc2 text-cc1 p-2 rounded-lg hover:bg-cc2/50 w-1/3 font-bold">
        BET
      </button>
    </form>
  );
};

export default BettingForm;
