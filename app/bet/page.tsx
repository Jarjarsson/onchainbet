"use client";
import React, { useContext, useState } from "react";
import {
  getMaxBet,
  connectWallet,
  placeBet,
  ethToWei,
} from "./web3/web3Client";
import contractAddress from "./constants/address";
import { useTContext } from "../context/Context";
import Header from "./component/Header";
import Bet from "./component/Bet";

const BetPage = () => {
  const { wallet, connect } = useTContext();
  const [contractBalance, setContractBalance] = useState("");

  return (
    <>
      <Header />
      {/* {console.log(connect)} */}
      <main className="flex justify-center items-center w-50">
        {connect && <Bet />}
        {!connect && (
          <p className="text-cc3 font-semibold text-5xl pt-20">
            Connect wallet to proceed
          </p>
        )}
      </main>
    </>
  );
};

export default BetPage;
