// double : 45%  (0.5*0.9)
// Triple:  30%  (0.3*1)
// 4 times : 20% (0.5*0.4)
// 5 times:  10% (0.2*0.5)
// 10 times : 1% (0.1*0.1)

const fromRandomNumberToSuccess = (multiplier: number) => {
  const [first, second] = Array.from({ length: 2 }, () =>
    Math.floor(Math.random() * 10)
  );
  if (multiplier === 2) {
    return first % 2 === 0 && second !== 0;
  } else if (multiplier === 3) {
    return [0, 1, 2].includes(first);
  } else if (multiplier === 4) {
    return [0, 1, 2, 3, 5].includes(first) && [6, 7, 8, 9].includes(second);
  } else if (multiplier === 5) {
    return [0, 1].includes(first) && [1, 6, 7, 8, 9].includes(second);
  } else {
    return 0 === first && 0 === second;
  }
};

const playGame = (bet: number, multiplier: number): number => {
  const resultMul = fromRandomNumberToSuccess(multiplier);
  if (resultMul) {
    return multiplier * bet;
  }
  return 0;
};

export { playGame };
