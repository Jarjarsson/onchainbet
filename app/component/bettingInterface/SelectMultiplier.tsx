type MultiplierProps = {
  multiplier: number;
  setMultiplier: (multiplier: number) => void;
  selected: boolean;
  buttonDisable: boolean;
};

const SelectMultiplier = ({
  multiplier,
  setMultiplier,
  selected,
  buttonDisable,
}: MultiplierProps) => {
  const handleMultiplier = () => {
    setMultiplier(multiplier);
  };
  return (
    <button
      onClick={handleMultiplier}
      className={`border-cc3 border-2 text-cc3 p-2 rounded-lg ${
        selected && "bg-cc1"
      }`}
      disabled={buttonDisable}
    >
      {multiplier}X
    </button>
  );
};

export { SelectMultiplier };
