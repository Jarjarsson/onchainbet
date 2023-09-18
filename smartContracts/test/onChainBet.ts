// import { ethers } from 'hardhat';
// // import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
// import { expect } from 'chai';
// import { WeiPerEther, parseEther } from 'ethers';
// import Contract from 'web3-eth-contract';

// describe('onChainBet', function () {
//   // let owner: SignerWithAddress;
//   // let player1: SignerWithAddress;
//   let onChainBet: any;

//   beforeEach(async function () {
//     [owner as any, player1 as any] = await ethers.getSigners();

//     const Contract = await ethers.getContractFactory('onChainBet');
//     onChainBet = await Contract.deploy();
//     await onChainBet.waitForDeployment();
//   });

//   it('should set the owner to the deployer', async function () {
//     expect(await onChainBet.owner()).to.equal(owner.address);
//   });

// });
