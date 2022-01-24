require('dotenv').config()
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_NODE_OP_MAINNET,
      }
    }
  }
};
