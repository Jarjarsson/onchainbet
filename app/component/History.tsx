import React from "react";
import { HistoryItem } from "../type";

type Prop = {
  history: HistoryItem[];
};

const History = ({ history }: Prop) => {
  console.log(history);
  return (
    <ul>
      {history.map((h) => (
        <li key={h.transaction}>
          <p>Status: {h.status}</p>
          <p>Bet Amount: {h.amount}</p>
          <a href={`https://sepolia.etherscan.io/tx/${h.transaction}`}>
            Transaction
          </a>
        </li>
      ))}
    </ul>
  );
};

export default History;
