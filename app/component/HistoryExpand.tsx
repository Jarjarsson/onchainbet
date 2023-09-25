import React, { useState } from 'react';
import History from '../component/HistoryItems';
import { HistoryItem } from '../type';

type Prop = {
  history: HistoryItem[];
  clear: () => void;
};

const HistoryExpand = ({ history, clear }: Prop) => {
  const [expand, setExpand] = useState(true);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <>
      <div
        className={`flex justify-between items-center hover:cursor-pointer px-2 py-1 font-semibold text-cc3 hover:bg-cc3/20  ${
          expand ? 'rounded-t-md bg-cc3/20' : 'rounded-md bg-cc3/50'
        }`}
        onClick={handleExpand}
      >
        <p>Betting History [current session]</p>
      </div>
      {expand && (
        <div className="flex flex-col gap-2 bg-cc3/50 p-2 rounded-b-md">
          <History history={history} />
          <div className="flex justify-between">
            <p className="text-cc1 bg-cc3 p-1 text-sm rounded-md">
              Balance:{' '}
              {history.reduce((prev, next) => {
                return (prev +=
                  next.status === 'Win'
                    ? next.amount * next.multiplier
                    : -next.amount);
              }, 0).toFixed(5)}
            </p>
            <button
              className="text-cc1 bg-cc3 p-1 text-sm rounded-md hover:bg-cc2/50"
              onClick={() => {
                clear();
              }}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HistoryExpand;
