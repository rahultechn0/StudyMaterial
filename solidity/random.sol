// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Random {

    function RandamVal() public view returns (uint256) {
        uint256 randomnumber;
        randomnumber = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 6;
        randomnumber = randomnumber + 10;
        return randomnumber;
    }
}