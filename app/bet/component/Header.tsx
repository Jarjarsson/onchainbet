'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useTContext } from '../../context/Context';
import { connectWallet } from '../web3/web3Client';
import { cropWallet } from '../utils/utils';

const Header = () => {
  const { wallet, setWallet } = useTContext();
  const { connect, setConnect } = useTContext();

  const handleSelectWallet = async () => {
    await connectWallet().then(res => {
      setWallet(res.address);
      setConnect(true);
    });
  };

  return (
    <header className="flex justify-between px-8 py-2 ">
      <Image
        src="/logo.png"
        alt="logo"
        width={60}
        height={60}
        className="rounded-md"
      />
      {!connect && (
        <button
          onClick={handleSelectWallet}
          className="border border-[#13172a] p-1 rounded-md font-semibold"
        >
          Connect wallet
        </button>
      )}
      {connect && (
        <p className="border border-[#13172a] p-1 rounded-md font-semibold flex items-center">
          {wallet !== '' && cropWallet(wallet)}
        </p>
      )}
    </header>
  );
};

export default Header;
