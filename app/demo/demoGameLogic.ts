import { Result } from "../type";

let pool = 2;
let playerBalance = 2;

const getPlayerBalance = () => playerBalance;
const getPool = () => pool;

const playGame = (bet: number, multiplier: number): Result => {
  const prize = bet * multiplier;
  const num = Math.floor(Math.random() * 100);
  const win = num <= 88 / multiplier;

  playerBalance -= bet;
  pool += bet;
  if (win) {
    pool -= prize;
    playerBalance += prize;
    return { status: "Win", amount: bet, number: num };
  }
  return { status: "Loss", amount: bet, number: num };
};

export { playGame, getPlayerBalance, getPool };
