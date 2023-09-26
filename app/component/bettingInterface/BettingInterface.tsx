import { SelectMultiplier } from "./SelectMultiplier";
import { DisplayNumber } from "./DisplayNumber";
import { useState } from "react";
import { animator } from "@/app/utils/utils";

type Prop = {
  handleBet: (
    multiplier: number,
    amount: number,
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
    if (result.status === "Success!") {
      const t = animation.start(0);
      handleResult(async (number: number) => {
        const winningIndex = rndArray.indexOf(Number(number));
        await animation.slowDown(winningIndex, t);
        setButtonDisabled(false);
      });
    } else {
      setButtonDisabled(false);
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onBet();
        }}
        className="flex text-cc3 w-3/4 justify-around items-center  "
      >
        <div>
          <label htmlFor="multiplierRange" className="text-2xl">
            Bet Amount{" "}
          </label>
          <input
            id="multiplierRange"
            type="range"
            value={amount}
            min={0.00001}
            max={maxAmount.toFixed(5)}
            step={0.00001}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <div className="grid grid-cols-2">
            <p className="text-left">Bet amount:</p>
            <p className="text-left">{amount} ETH</p>
            <p>Payout: </p>
            <p>{(multiplier * amount).toFixed(5)} ETH</p>
          </div>
        </div>
        <button
          disabled={buttonDisabled}
          className="text-4xl rounded-md bg-cc2 text-cc1 h-fit p-2"
        >
          BET
        </button>
      </form>
      <div className="flex gap-6 w-3/4 justify-center">
        <div className="flex flex-col justify-around ">
          {[2, 4, 8, 10].map((i) => (
            <SelectMultiplier
              key={i + "mul"}
              setMultiplier={(value) => {
                setMultiplier(value);
              }}
              multiplier={i}
              selected={i === multiplier}
              buttonDisable={buttonDisabled}
            ></SelectMultiplier>
          ))}
        </div>
        <ul className="grid grid-cols-10 gap-y-2 gap-x-4">
          {rndArray.map((num, i) => (
            <DisplayNumber
              key={i + "grid"}
              num={num}
              winnable={88 / multiplier < num}
              active={activeNumber === i}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default BettingInterface;
