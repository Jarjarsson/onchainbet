/**
 *Submitted for verification at Etherscan.io on 2023-09-13
*/

// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract test {
    address public owner;
    uint256 private randNone = 0;

    event GameResult(string status, uint256 amount, uint256 outcome);

    constructor() {
        owner = msg.sender;
    }

    function deposit() external payable {
        require(msg.value > 0);
    }

    function withdraw(uint256 amount) external {
        require(msg.sender == owner);
        require(amount <= address(this).balance);
        payable(owner).transfer(amount);
    }

    function randMod() internal returns (uint256) {
        randNone++;
        return
            uint256( 
                keccak256(
                    abi.encodePacked(block.timestamp, msg.sender, randNone)
                )
            ) % 100;
    }

    function placeBet(uint256 multiplier) public payable {
        require(multiplier <= 10 && msg.value <= address(this).balance / 50);
        uint256 outcome = randMod();
        if (outcome <= (92 / multiplier)) {
            payable(msg.sender).transfer(msg.value * multiplier);
            emit GameResult("Win", msg.value * multiplier, outcome);
        }
        emit GameResult("Loss", 0, outcome);
    }
}

//https://sepolia.etherscan.io/address/0x7db63f8ba2de6b9f119909999b72016913c3fd1f#writeContract

//I won