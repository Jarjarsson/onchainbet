# OnChainBet

Welcome to OnChainBet, an Ethereum-based betting application built with Next.js, Solidity smart contracts, Hardhat, Alchemy (RPC provider), web3.js, and ethers.js. OnChainBet allows you to place bets on the Ethereum Sepolia testnet, offering both live and demo modes for your betting pleasure. Whether you're a blockchain enthusiast or new to the technology, this README will guide you through the application's features, setup, and usage.

## Features

### Live Mode
In the live mode, you can place real bets on the Ethereum Sepolia testnet. Here's how it works:

1. **Bet Amount Slider**: Use a slider to set your bet amount within the range of the lowest to the maximum allowed bet.
2. **Multiplier Selection**: Choose a multiplier between 2 and 10, which will determine your potential payout (multiplied by your bet).
3. **Transaction**: Once you've set your bet amount and multiplier, you can send a transaction on the Ethereum Sepolia testnet to place your bet.

### Demo Mode
If you're unsure about installing Metamask, you can simulate the application in the demo mode.

1. **Fake Balance**: You'll have a simulated balance for betting.
2. **Simulation**: When you place a bet, a simulation of the real application will be initiated to mimic the actual betting process.

### Betting History
In both live and demo modes, OnChainBet keeps track of your betting history for the current session. You'll see your wins, losses, and timestamps to help you monitor your Profit and Loss (P&L) for the ongoing session.

### About Section
The About section provides brief information about the project and its founders, giving you insights into the motivation behind OnChainBet.

## Installation and Usage

To run OnChainBet, follow these steps:

1. **Clone the Repository**: Clone this GitHub repository to your local machine.

   ```bash
   git clone https://github.com/jarjarsson/onchainbet.git



Install Dependencies: Navigate to the project directory and install the required dependencies.
  <br/>cd onchainbet
  <br/>npm install

Metamask Installation: Make sure you have Metamask installed in your browser. Metamask is required to interact with the live application on the Ethereum testnet.


How Blockchain Works
Blockchain technology is the foundation of OnChainBet. If you're new to blockchain, here's a brief overview:

Decentralization: Blockchains are distributed ledgers that are maintained by a network of nodes (computers) rather than a central authority. This makes them resistant to censorship and tampering.

Transactions: Transactions on a blockchain are recorded in blocks, which are linked together in a chain. Once a transaction is added to a block, it cannot be altered, ensuring transparency and security.

Smart Contracts: Smart contracts are self-executing contracts with predefined rules and conditions. They automate and enforce agreements, such as the betting logic in OnChainBet.

Cryptocurrency: Blockchains often have their own native cryptocurrencies (e.g., ETH on Ethereum). These digital assets are used for transactions and fees within the network.

License
This project is licensed under the MIT License. See the LICENSE file for details.

If you have any questions or feedback, please don't hesitate to reach out to us!