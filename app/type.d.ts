export type Result = {
  status: string;
  amount: number;
};

export type winLoss = 'Loss' | 'Win';

export type ReturnValues = {
  amount: bigint;
  outcome: bigint;
  playerAddress: string;
  status: winLoss;
};

export type HistoryItem = {
  status: winLoss;
  amount: number;
  multiplier: number;
  transaction: string;
};
