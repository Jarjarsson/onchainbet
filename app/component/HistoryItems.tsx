import React from "react";
import { HistoryItem } from "../type";

type Prop = {
  history: HistoryItem[];
};

const History = ({ history }: Prop) => {
  return (
    <ul className="text-cc1 bg-cc3/30 rounded-md text-xs h-80 overflow-y-auto">
      {history.map((h, i) => (
        <li
          className="flex justify-between border-b-2 p-2 last:border-none"
          key={h.transaction + i}
        >
          <div className="flex gap-1">
            <p>{h.time}</p>
            <p>
              {h.status === "Loss"
                ? `You lost ${h.amount} ETH`
                : `You won ${h.amount * h.multiplier} ETH `}
            </p>
          </div>
          {h.transaction.length !== 0 && (
            <a
              className="text-cc1/50 hover:text-cc2/50"
              href={`https://sepolia.etherscan.io/tx/${h.transaction}`}
              target="_blank"
            >
              Transaction
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default History;
