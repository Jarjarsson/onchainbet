import { useState } from "react";

type Props = {
  maxAmount: number;
  setAmt: (amount: number) => void;
  handleBet: (multiplier: number, amount: number) => Promise<void>;
};

const SpecifyAmount = ({ maxAmount, setAmt, handleBet }: Props) => {
  const [amount, setAmount] = useState(0.00001);

  return (
    <form
      onSubmit={() => {
        handleBet;
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
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <p>Bet amount: {amount} ETH</p>
      <button>BET</button>
    </form>
  );
};

export { SpecifyAmount };
