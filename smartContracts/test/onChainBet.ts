import { expect } from "chai";
import { ethers } from "hardhat";

describe("Onchainbet Contract", function () {
  let prize: number;
  let ranNum: number;

  // Before each test, deploy a new Clicker contract
  beforeEach(async function () {
    const Onchainbet = await ethers.getContractFactory("Onchainbet");
    const onchainbet = await Onchainbet.deploy();
    await onchainbet.waitForDeployment();

    it("Should deploy with balance of 0", async function () {
      const balance = await onchainbet.getBalance("Onchainbet");
      expect(balance).to.equal(0);
    });
  });
});
