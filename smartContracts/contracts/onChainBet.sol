// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract onChainBet {
    address public admin;
    mapping(address => uint) balances;

    // Setting the deployer address as the admin address
    constructor() {
        admin = msg.sender;
    }

    // Deposit function [To be implemented]

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    // Withdraw function [To be implemented]
    function withdraw(uint amount) public {
        require(msg.sender == admin, "Not authorized to withdraw");
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }

    // Randomize function
    uint randNone = 0;
    uint public result = 0;

    function randMod() public {
        randNone++;
        result =
            uint(
                keccak256(
                    abi.encodePacked(block.timestamp, msg.sender, randNone)
                )
            ) %
            100;
    }

    // Betting logic [To be implemented]
}
