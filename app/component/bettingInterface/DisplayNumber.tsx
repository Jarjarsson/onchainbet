type NumberProps = {
  num: number;
  winnable: boolean;
  active: boolean;
};

const DisplayNumber = ({ num, winnable, active }: NumberProps) => {
  let color = winnable ? 'cc1' : 'cc2';
  if (active) {
    color = 'cc3';
  }

  return (
    <li
      className={`bg-${color} list-none border-white border-2 text-center text-cc1`}
    >
      {num}
    </li>
  );
};

export { DisplayNumber };
