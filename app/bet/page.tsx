'use client';
import React, { useContext, useState } from 'react';
import {
  getMaxBet,
  connectWallet,
  placeBet,
  ethToWei,
} from './web3/web3Client';
import contractAddress from './constants/address';
import { useTContext } from '../context/Context';
import Header from './component/Header';
import Bet from './component/Bet';

const BetPage = () => {
  const { wallet, connect } = useTContext();
  const [contractBalance, setContractBalance] = useState('');

  return (
    <>
      <Header />
      {/* {console.log(connect)} */}
      {connect && <Bet />}
      {!connect && <p>Connect wallet to proceed</p>}
    </>
  );
};

export default BetPage;
