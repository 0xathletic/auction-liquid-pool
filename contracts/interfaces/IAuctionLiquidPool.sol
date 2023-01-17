// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./IBaseAuctionLiquidPool.sol";

interface IAuctionLiquidPool is IBaseAuctionLiquidPool {
    function initialize(
        address,
        address,
        address,
        PoolParams memory
    ) external;

    function transferOwnership(address) external;
}
