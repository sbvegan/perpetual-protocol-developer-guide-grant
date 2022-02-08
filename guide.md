# How to get mark and index prices from PerpV2

The following guide will show you how to read the mark and index prices of the assets trading on the Perpetual Protocol.

## Environment
- initialize
- .env 
- dependencies
- hardhat 

First up, let's setup our environment, so we have something reproducible. Create an empty directory, navigate inside, and create a npm project. 

```
mkdir perp-price-demo
cd perp-price-demo
npm init -y
```

Now let's gather the necessary dependencies.

```
npm install --save-dev hardhat
```

Run hardhat

```
npx hardhat
```

You'll get the following output. Select `Create a basic sample project`

```
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

Welcome to Hardhat v2.8.3

? What do you want to do? … 
▸ Create a basic sample project
  Create an advanced sample project
  Create an advanced sample project that uses TypeScript
  Create an empty hardhat.config.js
  Quit
```

Select the default parameters by just hitting `enter`.

Update your `package.json` by adding this entry and then run `npm i`
```
"dependencies": {
  "@openzeppelin/contracts-upgradeable": "3.4.2",
  "@perp/curie-contract": "^1.0.14",
  "@perp/perp-oracle-contract": "^0.2.2",
  "@uniswap/v3-core": "^1.0.1",
  "@uniswap/v3-periphery": "^1.4.0",
  "dotenv": "^15.0.0"
}
```

TODO: explain dependencies

TODO: create `.env` file

TODO: update `hardhat.config.js` so it looks like this:

```
module.exports = {
  solidity: "0.7.6",
  networks: {
    hardhat: {
      forking: {
        url: INSERT_ALCHEMY_OPTIMISM_URL
    }
  },
};

```

## Smart Contract

TODO: delete default `Greeter.sol`

TODO: walk through the smart contract code

## Script

TODO: walk through script

TODO: run script

TODO: go over expected output

## Conclusion

TODO: include full code repo