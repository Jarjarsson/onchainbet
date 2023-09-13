// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract test {
    address public owner;
    uint256 public balance;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, revert('Not authorized'));
    }

        function deposit() external payable {
        require(msg.value > 0, "Transaction value must be greater than 0");
        balance += msg.value;
    }

        function withdraw(uint256 amount) external onlyOwner {
        require(amount <= balance, "Not enough balance in the contract");
        payable(owner).transfer(amount);
        balance -= amount;
    }

        function checkBalance() external view returns (uint256) {
        return balance;
    }

        function randMod() internal {
        randNone++;
        result = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, randNone))) % 100;
    }

    function placeBet(uint256 bet, uint256 multiplier) public {
        require(multiplier < 10, "Multiplier must be less than 10");
        require(msg.value > 0, "Transaction value must be greater than 0");
        require(msg.value <= balance / 50, "Bet exceeds maximum allowed bet");
        randMod();
        if (result <= 92 / multiplier) {
            payable(msg.sender).transfer(msg.value * multiplier);
            balance -= msg.value * multiplier;
        } else {
            balance += msg.value;
        }
    }

}


/* 

// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract test {
    address public owner;
    uint256 public balance;
    uint256 private randNone = 0;
    uint public result = 0;
    

    constructor() {
        owner = msg.sender;
    }

        function deposit() external payable {
        require(msg.value > 0, "Transaction value must be greater than 0");
        balance += msg.value;
    }

        function withdraw(uint256 amount) external {
        require(msg.sender == owner);
        require(amount <= balance, "Not enough balance in the contract");
        payable(owner).transfer(amount);
        balance -= amount;
    }

        function checkBalance() external view returns (uint256) {
        return balance;
    }

        function randMod() internal {
        randNone++;
        result = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, randNone))) % 100;
    }

    function placeBet(uint256 multiplier) public payable {
        require(multiplier < 10, "Multiplier must be less than 10");
        require(msg.value > 0, "Transaction value must be greater than 0");
        require(msg.value <= balance / 50, "Bet exceeds maximum allowed bet");
        randMod();
        if (result >= 92 / multiplier) {
            payable(msg.sender).transfer(msg.value * multiplier);
            balance -= msg.value * multiplier;
        } else {
            balance += msg.value;
        }
    }

}


 */