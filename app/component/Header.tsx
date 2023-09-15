import React from "react";
import Image from "next/image";
import { useTContext } from "../context/Context";

const Header = () => {
  const {wallet} = useTContext()
  return (
    <header>
      <Image src="/logo.png" alt="logo" width={60} height={60} />
      <p>{wallet}</p>
    </header>
  );
};

export default Header;
