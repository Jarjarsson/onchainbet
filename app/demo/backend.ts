// double : 45%  (0.5*0.9)
// Triple:  30%  (0.3*1)
// 4 times : 20% (0.5*0.4)
// 5 times:  10% (0.2*0.5)
// 10 times : 9% (0.1*0.9)

import { Result } from '../type';

let pool = 0.2;
let playerBalance = 2;

const getPlayerBalance = () => playerBalance;
const getPool = () => pool;

const fromRandomNumberToSuccess = (multiplier: number) => {
  const num = Math.floor(Math.random() * 100);
  return num <= 88 / multiplier;
};

const playGame = (bet: number, multiplier: number): Result => {
  const prize = bet * multiplier;
  console.log({prize, pool: pool/12});
  if (prize > (pool/12)) {
    return { status: 'Developoors are broke', amount: 0 };
  } else if (playerBalance < bet) {
    return { status: 'Sorry, you are broke', amount: 0 };
  } else {
    const win = fromRandomNumberToSuccess(multiplier);
    playerBalance -= bet;
    pool += bet;
    if (win) {
      pool -= prize;
      playerBalance += prize;
      return { status: 'Congrats!', amount: prize };
    }
    return { status: 'You lost!', amount: 0 };
  }
};

export { playGame, getPlayerBalance, getPool };
