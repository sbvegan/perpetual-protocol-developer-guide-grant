# Perpetual Protocol Developer Guide Grant

## Milestones:  

### Milestone 1 - Completed (commit: )

Successfully programmatically pulled the mark price, index price, ~~and funding rate~~ from the mainnet contracts by Feb 4th.

I have been able to successfully pull the mark and index price from PerpV2's smart contracts. However, in the protocol's current state, external accounts cannot read the funding rate of a contract. Developers can get the funding rate from [Perp's Subgraph](https://thegraph.com/hosted-service/subgraph/perpetual-protocol/perpetual-v2-optimism?query=List%20FundingUpdateds).

If you want to verify completeness:

1. Clone the repository and checkout the indicated commit.

2. Install dependencies:

```
npm i
```

3. Update `.env` file with alchemy mainnet optimism node.

4. Run hardhat script:

```
npx hardhat run scripts/fetchPrice.js
```

Your output should look something like this:

```
Deploying PerpSandbox...
PerpSandbox deployed to:  0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
Initializing PerpSandbox...
Getting TWAP interval...
900
Getting vbtc mark price...
37308.39547593508
Getting btc index price...
37339.30244256
Getting veth mark price...
2682.5021642673732
Getting eth index price...
2685.21784576
```

The `PerpSandbox.sol` pulls in the relevant `Perp` contracts and `Uniswap` contracts (for formatting). Then the script deploys the contract, initializes the necessary values, and then reads the protocol current mark and index prices for BTC and ETH.

### Milestone 2

Break down the code in to a concise article that developers can use to implement the same functionality in their own code by Feb. 25th

## Project Description: 

I'd like to take a look at the smart contracts and create guides to teach developers to programmatically interact with the protocol. My personal goal is to develop trading strategies on Curie, so I'd also like to create a guide to get an assets mark price, index price, and the current funding rate.

