import React from 'react';
import { HistoryItem } from '../type';

type Prop = {
  history: HistoryItem[];
};

const History = ({ history }: Prop) => {
  return (
    <ul className="flex flex-col text-cc1 bg-cc3/30  rounded-md text-xs">
      {history.map((h, i) => (
        <li
          className="flex flex-col border-b-2 p-2 last:border-none gap-none"
          key={h.transaction + i}
        >
          <p>
            {h.status === 'Loss'
              ? `You lost ${h.amount} ETH`
              : `You won ${h.amount * h.multiplier} ETH `}
          </p>
          <br></br>
          {h.transaction.length !== 0 && (
            <a
              className="text-cc1/50 hover:text-cc2/50"
              href={`https://sepolia.etherscan.io/tx/${h.transaction}`}
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
