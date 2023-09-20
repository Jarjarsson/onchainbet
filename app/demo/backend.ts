import { Result } from "../type";

let pool = 2;
let playerBalance = 2;

const getPlayerBalance = () => playerBalance;
const getPool = () => pool;

const fromRandomNumberToSuccess = (multiplier: number) => {
  const num = Math.floor(Math.random() * 100);
  return num <= 88 / multiplier;
};

const playGame = (bet: number, multiplier: number): Result => {
  const prize = bet * multiplier;

  const win = fromRandomNumberToSuccess(multiplier);
  playerBalance -= bet;
  pool += bet;
  if (win) {
    pool -= prize;
    playerBalance += prize;
    return { status: "Win", amount: bet };
  }
  return { status: "Loss", amount: bet };
};

export { playGame, getPlayerBalance, getPool };
