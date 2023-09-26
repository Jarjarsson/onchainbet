type NumberProps = {
  num: number;
  winnable: boolean;
  active: boolean;
};

const DisplayNumber = ({ num, winnable, active }: NumberProps) => {
  let color = winnable ? "cc1" : "cc2";
  let textColor = winnable ? "cc3" : "cc1";

  if (active) {
    color = "cc3";
    textColor = "cc1";
  }

  return (
    <li
      className={`bg-${color} list-none border-white border-2 rounded-full text-center text-${textColor} h-full aspect-square`}
    >
      {num}
    </li>
  );
};

export { DisplayNumber };
