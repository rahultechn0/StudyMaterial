// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract lottery{
    address public manager;
    address payable[] public participents;

    constructor() {
       manager = msg.sender;
    }

    receive() external payable{      //only one time call
        require(msg.value == 1 ether);
        participents.push(payable(msg.sender));
    }

    function getBalance() public view returns(uint){
        require(msg.sender == manager);
       return address(this).balance;
    }

    function random() public view returns(uint){
       return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp,participents.length))) % participents.length;
    }

    function selectWinner() public {
        require(msg.sender == manager);
        require( participents.length>=3 );
        uint index = random();
        address payable winner;
        winner = participents[index];
        winner.transfer(getBalance()); // winner selected
        participents = new address payable[](0); // reset the array
    }
}