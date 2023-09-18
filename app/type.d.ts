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
