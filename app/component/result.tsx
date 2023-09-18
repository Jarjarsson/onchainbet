import { ReturnValues } from "@/app/type";
import React, { useEffect, useState } from "react";
import { gameResult, weiToEth } from "../bet/web3/web3Client";
import { useTContext } from "@/app/context/Context";

const Result = () => {
  const { wallet, setLoadingBet, loadingBet, setShowResult } = useTContext();
  const [result, setResult] = useState("");
  const [prize, setPrize] = useState(0);
  useEffect(() => {
    gameResult((value: ReturnValues) => {
      setLoadingBet(false);
      setResult(value.status);
      setPrize(weiToEth(Number(value.amount)));
      console.log(value);
    }, wallet);
  }, [wallet, setLoadingBet]);

  const handlePlayAgain = () => {
    setShowResult(false);
  };

  return (
    <div>
      {" "}
      {loadingBet && <p className="text-cc3">Getting result</p>}
      {result === "" ? (
        <p></p>
      ) : (
        <div>
          <p className="text-cc3">
            You {result}, Prize: {prize}
          </p>
          <button
            onClick={handlePlayAgain}
            className="text-cc3 bg-cc3/50 rounded-lg px-4 py-2"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Result;
