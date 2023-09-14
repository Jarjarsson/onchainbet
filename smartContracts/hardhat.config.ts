import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";

const ALCHEMY_API_KEY = "ET7Rh8pt9Djc9dEaYvVcxhWd5EtIn3PK";
const SEPOLIA_PRIVATE_KEY =
  "3c33329a47a1967e4b6774be266064bd1a2901da474b4a08407fe2b65dc96ae0";
const API_URL =
  "https://eth-sepolia.g.alchemy.com/v2/ET7Rh8pt9Djc9dEaYvVcxhWd5EtIn3PK";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: API_URL,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};

export default config;
