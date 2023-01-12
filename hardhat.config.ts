import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-web3';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import 'dotenv/config';
import '@openzeppelin/hardhat-upgrades';

export default {
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      forking: {
        url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      },
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      chainId: 1,
      accounts: [process.env.PRIVATE_KEY],
    },
    testnet: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      chainId: 5,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
  solidity: {
    compilers: [{ version: '0.8.17' }, { version: '0.4.24' }, { version: '0.5.16' }],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
