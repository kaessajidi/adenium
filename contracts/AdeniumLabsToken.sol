pragma solidity ^0.4.18;

import "./token/ERC20/PausableToken.sol";
import "./token/ERC20/BurnableToken.sol";

contract AdeniumLabsToken is PausableToken, BurnableToken {
    string public constant name = "Adenium Token";
    string public constant symbol = "ADN";
    uint8 public constant decimals = 18;

    uint256 public constant INITIAL_SUPPLY = 13000000 * (10 ** uint256(decimals));

    /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */
  function AdeniumLabsToken() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
    Transfer(0x0, msg.sender, INITIAL_SUPPLY);
  }

  /*
  * No direct bay of tokens
  */
  function () public {
      revert();
  }

}
