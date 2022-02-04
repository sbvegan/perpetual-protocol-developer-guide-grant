// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity 0.7.6;

import {BaseToken} from "@perp/curie-contract/contracts/BaseToken.sol";
import {ClearingHouse} from "@perp/curie-contract/contracts/ClearingHouse.sol";
import {ClearingHouseConfig} from "@perp/curie-contract/contracts/ClearingHouseConfig.sol";
import {Exchange} from "@perp/curie-contract/contracts/Exchange.sol";

import {FixedPoint96} from "@uniswap/v3-core/contracts/libraries/FixedPoint96.sol";
import {FullMath} from "@uniswap/v3-core/contracts/libraries/FullMath.sol";

contract PerpSandbox {
    ClearingHouse clearingHouse;
    ClearingHouseConfig clearingHouseConfig;
    Exchange exchange;

    function initialize(address _clearingHouseAddress) public {
        clearingHouse = ClearingHouse(_clearingHouseAddress);
        address clearingHouseConfigAddress = clearingHouse
            .getClearingHouseConfig();
        clearingHouseConfig = ClearingHouseConfig(clearingHouseConfigAddress);
        address exchangeAddress = clearingHouse.getExchange();
        exchange = Exchange(exchangeAddress);
    }

    function getTwapInterval() public view returns (uint32) {
        return clearingHouseConfig.getTwapInterval();
    }

    function getMarkPrice(address _baseToken, uint32 _twapInterval)
        public
        view
        returns (uint256)
    {
        uint160 sqrtMarkX96 = exchange.getSqrtMarkTwapX96(
            _baseToken,
            _twapInterval
        );
        uint256 markPriceX96 = formatSqrtPriceX96ToPriceX96(sqrtMarkX96);
        uint256 markPrice = formatX96ToX10_18(markPriceX96);
        return markPrice;
    }

    function getIndexPrice(address _baseToken, uint32 _twapInterval)
        public
        view
        returns (uint256)
    {
        BaseToken baseToken = BaseToken(_baseToken);
        return baseToken.getIndexPrice(_twapInterval);
    }

    function formatSqrtPriceX96ToPriceX96(uint160 sqrtPriceX96)
        internal
        pure
        returns (uint256)
    {
        return FullMath.mulDiv(sqrtPriceX96, sqrtPriceX96, FixedPoint96.Q96);
    }

    function formatX96ToX10_18(uint256 valueX96)
        internal
        pure
        returns (uint256)
    {
        return FullMath.mulDiv(valueX96, 1 ether, FixedPoint96.Q96);
    }
}
