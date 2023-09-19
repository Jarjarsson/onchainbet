import React from 'react';
import { HistoryItem } from '../type';

type Prop = {
  history: HistoryItem[];
};

const History = ({ history }: Prop) => {
  return (
    <ul className="flex flex-col text-cc3 border-cc3 border-2 rounded-md">
      {history.map(h => (
        <li
          className="flex border-b-2 p-2 last:border-none gap-5"
          key={h.transaction}
        >
          <p>
            {h.status === 'Loss'
              ? `You lost ${h.amount} ETH`
              : `You won ${h.amount * h.multiplier} ETH `}
            -{' '}
            <a href={`https://sepolia.etherscan.io/tx/${h.transaction}`}>
              Transaction
            </a>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default History;
