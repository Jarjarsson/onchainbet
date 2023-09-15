"use client";
import React from "react";
import Image from "next/image";
import { useTContext } from "../context/Context";
import { connectWallet } from "../bet/web3/web3Client";

const Header = () => {
  const { wallet, setWallet } = useTContext();
  console.log(wallet);

  const handleSelectWallet = async () => {
    await connectWallet().then((res) => {
      setWallet(res.address);
    });
  };

  return (
    <header>
      <Image src="/logo.png" alt="logo" width={60} height={60} />
      <button onClick={handleSelectWallet}>Connect</button>
      <p>{wallet}</p>
    </header>
  );
};

export default Header;
