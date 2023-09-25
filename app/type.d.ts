export type Result = {
  status: winLoss;
  amount: number;
  number: number
};

export type winLoss = "Loss" | "Win";

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
  time: string;
};
