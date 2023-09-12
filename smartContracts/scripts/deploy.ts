import { ethers } from "hardhat";

const main = async () => {
  const Clicker = await ethers.getContractFactory("Clicker");
  const clicker = await Clicker.deploy();

  await clicker.waitForDeployment();
  const address = await clicker.getAddress();
  console.log("Clicker deployed to:", address);
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
