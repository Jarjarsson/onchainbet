import { expect } from "chai";
import { ethers } from "hardhat";

describe("Clicker Contract", function () {
  let clicker: any;
  let owner;

  // Before each test, deploy a new Clicker contract
  beforeEach(async function () {
    const Clicker = await ethers.getContractFactory("Clicker");
    clicker = await Clicker.deploy();
    await clicker.waitForDeployment();

    // Get the deployer's address as the owner
    [owner] = await ethers.getSigners();
  });

  it("Should deploy the contract with an initial count of 0", async function () {
    const count = await clicker.clickedCount();
    expect(count).to.equal(0);
  });

  it("Should increment the count when calling the click function", async function () {
    await clicker.click();
    const count = await clicker.clickedCount();
    expect(count).to.equal(1);
  });

  it("Should reset the count when calling the reset function", async function () {
    await clicker.click();
    await clicker.reset();
    const count = await clicker.clickedCount();
    expect(count).to.equal(0);
  });

  it("Should emit a Count event when calling the click function", async function () {
    await expect(clicker.click()).to.emit(clicker, "Count");
    // const tx = await clicker.click();
    // const receipt = await tx.wait();
    // console.log(receipt);
    // expect(receipt.events[0].event).to.equal("Count");
    // expect(receipt.events[0].args[0]).to.equal(1);
  });
});