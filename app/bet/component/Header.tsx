'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useTContext } from '../../context/Context';
import { checkConnection, connectWallet } from '../web3/web3Client';
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

  useEffect(() => {
    (async () => {
      await checkConnection(setWallet);
      if (wallet !== '') {
        setConnect(true);
      }
    })();
  }, [wallet, setWallet, setConnect]);

  return (
    <header className="flex justify-between px-8 py-2 items-center ">
      <Image
        src="/logo.png"
        alt="logo"
        width={80}
        height={80}
        className="rounded-md"
      />
      {!connect && (
        <button
          onClick={handleSelectWallet}
          className=" px-2 py-1 font-semibold text-cc3 bg-cc3/50 rounded-md h-2/3"
        >
          Connect wallet
        </button>
      )}
      {connect && (
        <p className="px-2 py-1 font-semibold text-cc3 bg-cc3/50 rounded-md h-2/3">
          {wallet !== '' && cropWallet(wallet)}
        </p>
      )}
    </header>
  );
};

export default Header;
