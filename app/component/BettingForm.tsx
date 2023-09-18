import { useState } from "react";

type Props = {
  handleBet: (multiplier: number, amount: number) => Promise<void>;
  maxAmount: number;
};

const BettingForm = ({ handleBet, maxAmount }: Props) => {
  const [multiplier, setMultiplier] = useState(2);
  const [amount, setAmount] = useState(0);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleBet(multiplier, amount);
      }}
      className="flex flex-col text-cc3 gap-2"
    >
      <label htmlFor="multiplierRange">Multiplier {multiplier}:</label>
      <input
        id="multiplierRange"
        type="range"
        value={multiplier}
        min={2}
        max={10}
        onChange={e => setMultiplier(Number(e.target.value))}
      />
      <label htmlFor="betAmount">Bet Amount (max bet: {maxAmount})</label>
      <input
        className="text-black"
        id="betAmount"
        required
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
        type="number"
        step={0.000000001}
        min={0.000000001}
        max={maxAmount}
      />
      <button> Place bet </button>
    </form>
  );
};

export default BettingForm;
