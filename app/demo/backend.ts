// double : 45%  (0.5*0.9)
// Triple:  30%  (0.3*1)
// 4 times : 20% (0.5*0.4)
// 5 times:  10% (0.2*0.5)
// 10 times : 9% (0.1*0.9)

import { Result } from "../type";

let DPcoins = 1000;
let playerBalance = 500;

const getPlayerBalance = () => playerBalance;

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
    return 0 === first && 0 !== second;
  }
};

const playGame = (bet: number, multiplier: number): Result => {
  const prize = bet * multiplier;
  let DPMin = DPcoins - 100;
  if (DPMin < prize) {
    return { status: "Developoors are broke", amount: 0 };
  } else if (playerBalance < bet) {
    return { status: "Sorry, you are broke", amount: 0 };
  } else {
    const win = fromRandomNumberToSuccess(multiplier);
    playerBalance -= bet;
    DPcoins += bet;
    if (win) {
      DPcoins -= prize;
      playerBalance += prize;
      console.log(DPcoins);
      return { status: "Congrats!", amount: prize };
    }
    console.log(DPcoins);
    return { status: "You lost!", amount: 0 };
  }
};

export { playGame, getPlayerBalance };
