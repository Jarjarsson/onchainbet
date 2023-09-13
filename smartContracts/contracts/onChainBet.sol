// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

contract onChainBet {
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
}
