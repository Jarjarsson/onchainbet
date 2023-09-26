type MultiplierProps = {
  betAmount: number;
  multiplier: number;
  setMultiplier: (multiplier: number) => void;
  selected: boolean;
};

const SelectMultiplier = ({
  betAmount,
  multiplier,
  setMultiplier,
  selected
}: MultiplierProps) => {
  const handleMultiplier = () => {
    setMultiplier(multiplier);
  };
  return (
    <button onClick={handleMultiplier} className={`border-cc3 border-2 text-cc3 p-2 rounded-lg ${selected && 'bg-cc1'}`}>
      Win : {(betAmount * multiplier).toFixed(5)} ETH
    </button>
  );
};

export { SelectMultiplier };
