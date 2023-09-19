export type Result = {
  status: string;
  amount: number;
};

export type ReturnValues = {
  amount: bigint;
  outcome: bigint;
  playerAddress: string;
  status: "Loss" | "Win";
};

export type HistoryItem = {
  status: string;
  amount: number;
  transaction: string;
};
