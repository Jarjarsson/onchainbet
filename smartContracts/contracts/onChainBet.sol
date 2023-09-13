// Bug: can't withdraw decimals from the contract
// Fix: need to implement events
// Anything else?
// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract test {
    address public owner;
    uint256 public balance;
    uint256 private randNone = 0;
    uint256 public result = 0;

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

    function randMod() internal {
        randNone++;
        result = uint256( keccak256( abi.encodePacked(block.timestamp, msg.sender, randNone))) %100;
    }

    function placeBet(uint256 multiplier) public payable {
        require(multiplier <= 10 && msg.value <= balance / 50); 
        randMod();
        if (result <= (92 / multiplier)) {
            payable(msg.sender).transfer(msg.value * multiplier);
            balance -= msg.value * multiplier;
        } else {
            balance += msg.value;
        }
    }
}







// // SPDX-License-Identifier: MIT

// pragma solidity >=0.8.0 <0.9.0;

// contract onChainBet {
//     address public owner;
//     // Setting the deployer address as the admin address
//     constructor() {
//         owner = msg.sender;
//     }
//     modifier onlyOwner() {
//         require(msg.sender == owner, revert('Not authorized'));
//         _;
//     }
//     // only the owner can withdraw
//     function withdraw(uint256 amount) external onlyOwner {
//         require(amount <= balance, "Not enough balance in the contract");
//         payable(owner).transfer(amount);
//     }

//     // contract balance
//     uint public pool = address(this).balance;
//     uint public playerBalance = msg.sender.balance;

//     event GameResult(string status, uint amount);

//     // take the assigned amount from address
//     function deposit() public payable {
//     }

//     // check the balance of the pool
//     function checkBalance() external view returns(uint256){
//         return pool
//     }

//     // Randomize function
//     uint randNone = 0;
//     uint public result = 0;

//     function randMod() public {
//         randNone++;
//         result =uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, randNone))) % 100;
//     }

//     // the playGame logic
//     function playGame(uint multiplier) public {
//         uint prize = msg.value * multiplier;
       
//         require(multiplier <= 10, "Multiplier must be less or equal to 10");
//         require(msg.value > 0 && pool < msg.value);
//         if(pool < prize){
//             emit GameResult("Prize pool does not contain enough funds", 0);
//         }
//         else if(playerBalance < bet){
//             emit GameResult("Your balance is too low", 0);
//         } 

//         else if {
//             deposit(); //take the value from address to pool
//             randMod();
//             if (result <= (92 / multiplier)) {
//             payable(msg.sender).transfer(prize);
//             emit GameResult("You win!", prize)

//         } 
//         else {
//             emit GameResult("You lost this time, try again", 0)

//         }

            
//         }

//     }

    

// }


/* 

/*


// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract onChainBet {
    address public owner;
    // Setting the deployer address as the admin address
    constructor() {
        owner = msg.sender;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, revert('Not authorized'));
        _;
    }
    // only the owner can withdraw
    function withdraw(uint256 amount) external onlyOwner {
        require(amount <= balance, "Not enough balance in the contract");
        payable(owner).transfer(amount);
    }

    // contract balance
    uint public pool = address(this).balance;
    uint public playerBalance = msg.sender.balance;

    event GameResult(string status, uint amount);

    // take the assigned amount from address
    function deposit() public payable {
    }

    // check the balance of the pool
    function checkBalance() external view returns(uint256){
        return pool;
    }

    // Randomize function
    uint randNone = 0;
    uint public result = 0;

    function randMod() public {
        randNone++;
        result =uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, randNone))) % 100;
    }
    // the playGame logic
    function playGame(uint multiplier) public payable {
        uint prize = msg.value * multiplier;
        require(pool < prize, "Prize pool does not contain enough funds");
        require(playerBalance < msg.value, "Your balance is too low");
        require(multiplier <= 10, "Multiplier must be less or equal to 10");
        require(msg.value > 0 && pool < msg.value);
     
    
        
            randMod();
            if (result <= (92 / multiplier)) {
            payable(msg.sender).transfer(prize);
            emit GameResult("You win!", prize)

        } 
        else {
            emit GameResult("You lost this time, try again", 0)

        }

            
        }

    }

    }

    

}


 */



// Bug: can't withdraw decimals from the contract
// Fix: need to implement events
// Anything else?
// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract test {
    address public owner;
    uint256 public balance;
    uint256 private randNone = 0;
    uint256 public result = 0;

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
        result =
            uint256(
                keccak256(
                    abi.encodePacked(block.timestamp, msg.sender, randNone)
                )
            ) %
            100;
    }

    function placeBet(uint256 multiplier) public payable {
        require(multiplier <= 10, "Multiplier must be less than 10");
        require(msg.value > 0, "Transaction value must be greater than 0");
        require(msg.value <= balance / 50, "Bet exceeds maximum allowed bet");
        randMod();
        if (result <= (92 / multiplier)) {
            payable(msg.sender).transfer(msg.value * multiplier);
            balance -= msg.value * multiplier;
        } else {
            balance += msg.value;
        }
    }
}
