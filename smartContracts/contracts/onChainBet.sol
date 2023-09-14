// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract onChainBet {
    address public owner;
    uint256 private randNone = 0;

    event GameResult(
        string status,
        uint256 amount,
        uint256 outcome,
        address playerAddress
    );

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
        require(multiplier <= 10 && msg.value <= address(this).balance / 12);
        uint256 outcome = randMod();
        if (outcome <= (88 / multiplier)) {
            payable(msg.sender).transfer(msg.value * multiplier);
            emit GameResult("Win", msg.value * multiplier, outcome, msg.sender);
        } else {
            emit GameResult("Loss", 0, outcome, msg.sender);
        }
    }
}
