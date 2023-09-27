import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "dotenv";

const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.NEXT_PUBLIC_SEPOLIA_PRIVATE_KEY;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: API_URL,
      accounts: [SEPOLIA_PRIVATE_KEY!],
    },
  },
};

export default config;
