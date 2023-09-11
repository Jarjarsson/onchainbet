import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image src="/logo.png" alt="logo" width={60} height={60} />
    </header>
  );
};

export default Header;
