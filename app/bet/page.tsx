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
import Header from "../component/Header";
import Bet from "../component/Bet";
import History from "../component/History";

const BetPage = () => {
  const { history, connect } = useTContext();

  return (
    <>
      <Header />
      {/* {console.log(connect)} */}
      <main className="flex justify-center items-center w-50">
        {connect && (
          <>
            <Bet />
            <History history={history} />
          </>
        )}
        {!connect && (
          <p
            className="text-cc3 font-semibold text-5xl pt-20 typing-animation"
            // style={{ animation: "typing 3s steps(10) infinite" }}
          >
            Connect wallet to proceed
          </p>
        )}
      </main>
    </>
  );
};

export default BetPage;
