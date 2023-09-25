type MultiplierProps = {
  betAmount: number;
  multiplier: number;
  setMultiplier: (multiplier: number) => void;
};

const SelectMultiplier = ({
  betAmount,
  multiplier,
  setMultiplier,
}: MultiplierProps) => {
  const handleMultiplier = () => {
    setMultiplier(multiplier);
  };
  return (
    <button onClick={handleMultiplier} className="border-cc3 border-2 text-cc3 p-2 rounded-lg">
      Win : {(betAmount * multiplier).toFixed(5)} ETH
    </button>
  );
};

export { SelectMultiplier };
