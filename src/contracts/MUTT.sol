pragma solidity ^0.5.16;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MUTT is ERC20Mintable {
string public name;
string public symbol;
uint256 public decimals;

constructor() public {
    name= 'MUT Token (MUTT)';
    symbol= 'MUTT';
    decimals= 18;
}
}