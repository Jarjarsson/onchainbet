import { useState } from 'react';

type Props = {
  handleBet: (multiplier: number, amount: number) => Promise<void>;
  maxAmount: number;
};

const BettingForm = ({ handleBet, maxAmount }: Props) => {
  const [multiplier, setMultiplier] = useState(2);
  const [amount, setAmount] = useState(0.00001);
  return (
    <form
      className="flex flex-col text-cc3 gap-10 items-center py-2 bg-cc3/10 rounded-xl justify-center"
      onSubmit={e => {
        e.preventDefault();
        handleBet(multiplier, amount);
      }}
    >
      <div className="flex flex-col gap-5 w-4/5">
        <div className="flex gap-4 justify-between">
          <label htmlFor="multiplierRange">Multiplier </label>
          <div className="flex w-4/6 justify-between">
            <input
              id="multiplierRange"
              type="range"
              value={multiplier}
              min={2}
              max={10}
              onChange={e => setMultiplier(Number(e.target.value))}
              className="w-11/12"
            />
            <p>{multiplier}</p>
          </div>
        </div>

        <div className="flex gap-4 justify-between">
          <label htmlFor="betAmount">Bet Amount</label>
          <div className="flex flex-col items-end w-4/6 ">
            <input
              className="text-cc3 bg-cc1/30 border-none px-2 rounded-md w-full "
              id="betAmount"
              required
              value={amount}
              onChange={e => setAmount(Number(e.target.value))}
              type="number"
              step={0.00001}
              min={0.00001}
              max={maxAmount}
            />
            <p className="text-xs">{`max bet: ${maxAmount.toFixed(5)}`}</p>
          </div>
        </div>
      </div>

      <button className="text-3xl bg-cc3 text-cc1 p-2 rounded-lg hover:bg-cc2/50 w-1/3 font-bold">
        BET
      </button>
    </form>
  );
};

export default BettingForm;
