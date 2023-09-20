import React, { useContext, useState } from "react";
import History from "../component/HistoryItems";
import { useTContext } from "../context/Context";
import { storeHistory } from "../utils/utils";
import { HistoryItem } from "../type";

type Prop = {
  history: HistoryItem[];
};

const HistoryExpand = ({ history }: Prop) => {
  const { setHistory } = useTContext();
  const data = storeHistory();
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <section>
      <p
        className={`px-2 py-1 font-semibold text-cc3 hover:bg-cc3/20  ${
          expand ? "rounded-t-md bg-cc3/20" : "rounded-md bg-cc3/50"
        }`}
        onClick={handleExpand}
      >
        Betting History
      </p>
      {expand && history.length !== 0 && (
        <section className="flex flex-col gap-2 bg-cc3/50 p-2 rounded-b-md">
          <History history={history} />
          <div className="flex justify-between">
            <p className="text-cc1 bg-cc3 p-1 text-sm rounded-md hover:bg-cc2/50">
              Balance:{" "}
              {history.reduce((prev, next) => {
                return (prev +=
                  next.status === "Win" ? next.amount : -next.amount);
              }, 0)}
            </p>
            <button
              className="text-cc1 bg-cc3 p-1 text-sm rounded-md hover:bg-cc2/50"
              onClick={() => {
                data.clear();
                setHistory([]);
              }}
            >
              Clear
            </button>
          </div>
        </section>
      )}
    </section>
  );
};

export default HistoryExpand;
