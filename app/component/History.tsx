import React from "react";
import { HistoryItem } from "../type";

const History = (history: HistoryItem[]) => {
  return (
    <ul>
      {history.map((h) => (
        <li>
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
