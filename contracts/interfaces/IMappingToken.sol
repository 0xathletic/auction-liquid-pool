// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

interface IMappingToken {
    function initialize(
        string memory,
        string memory,
        uint256
    ) external;

    function mint(address, uint256) external;

    function burnFrom(address, uint256) external;

    function setPair(address) external;

    function transferOwnership(address) external;

    function approve(address, uint256) external;

    function owner() external view returns (address);
}
