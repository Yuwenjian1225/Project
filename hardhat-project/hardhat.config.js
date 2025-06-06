require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.21",
  defaultNetwork: 'hardhat',
  networks: {
    sepolia: {
      url: 'https://sepolia.infura.io/v3/29e8e7ab7bfd473980fbd5c744141b92',
      accounts: {
        mnemonic: "uncle lend matter casual alcohol random chicken measure session sing neutral enrich",
      },
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337
    }
  }
};
