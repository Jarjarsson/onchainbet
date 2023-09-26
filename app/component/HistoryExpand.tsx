import React, { useState } from "react";
import History from "../component/HistoryItems";
import { HistoryItem } from "../type";

type Prop = {
  history: HistoryItem[];
  clear: () => void;
};

const HistoryExpand = ({ history, clear }: Prop) => {
  // const [expand, setExpand] = useState(true);
  // const handleExpand = () => {
  //   setExpand(!expand);
  // };
  return (
    <>
      <div className="flex justify-between items-center  px-2 py-1 font-semibold select-none text-cc3 bg-cc3/20 rounded-t-lg">
        <p>Betting History [current session]</p>
      </div>

      <div className="flex flex-col gap-2 bg-cc3/50 p-2 rounded-b-md">
        <History history={history.reverse()} />
        <div className="flex justify-between">
          <p className="text-cc1 bg-cc3 p-1 text-sm rounded-md">
            Balance:{" "}
            {history
              .reduce((prev, next) => {
                return (prev +=
                  next.status === "Win"
                    ? next.amount * next.multiplier
                    : -next.amount);
              }, 0)
              .toFixed(5)}
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
    </>
  );
};

export default HistoryExpand;
