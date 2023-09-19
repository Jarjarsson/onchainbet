import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cc3/30 flex justify-around text-cc1/60 items-center p-2  ">
      <p className="items-center">Copyright | Developoors | 2023</p>

      <div className="flex gap-2">
        <p>
          <a
            href="https://sepolia.etherscan.io/address/0x499d0777bca6e72fa25d79d3aaacd3df9fd5b9ba"
            target="_blank"
          >
            View contract address |
          </a>
        </p>
        <p>Network: Sepolia testnet </p>
      </div>
    </footer>
  );
};
export default Footer;
