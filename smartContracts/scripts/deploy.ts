import { ethers } from "hardhat";

const main = async () => {
  const Onchainbet = await ethers.getContractFactory("onChainBet");
  const onchainbet = await Onchainbet.deploy();

  await onchainbet.waitForDeployment();
  const address = await onchainbet.getAddress();
  console.log("onchainbet deployed to:", address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
runMain();
