const hre = require("hardhat");

const ADDRESSES = {
    clearing_house: "0x82ac2CE43e33683c58BE4cDc40975E73aA50f459",
    ethusd_uni_v3_pool: "0x36B18618c4131D8564A714fb6b4D2B1EdADc0042",
    btcusd_uni_v3_pool: "0xC64f9436f8Ca50CDCC096105C62DaD52FAEb1f2e",
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
    console.log(vbtcMark)

    console.log("Getting btc index price...")
    const btcIndex = await perpSandbox.getIndexPrice(ADDRESSES.vbtc, twapInterval)
    console.log(btcIndex)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
