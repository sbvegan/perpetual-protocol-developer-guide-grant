const hre = require("hardhat");

const ADDRESSES = {
    clearing_house: "0x82ac2CE43e33683c58BE4cDc40975E73aA50f459",
    usdc: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
    veth: "0x8c835dfaa34e2ae61775e80ee29e2c724c6ae2bb",
    vbtc: "0x86f1e0420c26a858fc203a3645dd1a36868f18e5"
}

async function main() {
    console.log("Deploying PerpSandbox...")
    const PerpSandbox = await hre.ethers.getContractFactory("PerpSandbox");
    const perpSandbox = await PerpSandbox.deploy();
    await perpSandbox.deployed();
    console.log("PerpSandbox deployed to: ", perpSandbox.address);

    console.log("Initializing PerpSandbox...")
    await perpSandbox.initialize(ADDRESSES.clearing_house)

    console.log("Getting TWAP interval...")
    const twapInterval = await perpSandbox.getTwapInterval()
    console.log(twapInterval)

    console.log("Getting vbtc mark price...")
    const vbtcMark = await perpSandbox.getMarkPrice(ADDRESSES.vbtc, twapInterval)
    console.log(vbtcMark / 10 ** 18)

    console.log("Getting btc index price...")
    const btcIndex = await perpSandbox.getIndexPrice(ADDRESSES.vbtc, twapInterval)
    console.log(btcIndex / 10 ** 18)

    console.log("Getting veth mark price...")
    const vethMark = await perpSandbox.getMarkPrice(ADDRESSES.veth, twapInterval)
    console.log(vethMark / 10 ** 18)

    console.log("Getting eth index price...")
    const ethIndex = await perpSandbox.getIndexPrice(ADDRESSES.veth, twapInterval)
    console.log(ethIndex / 10 ** 18)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
