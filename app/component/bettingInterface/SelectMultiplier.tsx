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
    <button onClick={handleMultiplier}>
      Win : {(betAmount * multiplier).toFixed(5)} ETH
    </button>
  );
};

export { SelectMultiplier };
