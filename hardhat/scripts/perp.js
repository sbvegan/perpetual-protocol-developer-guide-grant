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
    console.log("getting the clearing house...")
    const clearingHouse = await hre.ethers.getContractAt("ClearingHouse", ADDRESSES.clearing_house)

    console.log("getting clearing house config...")
    const clearingHouseConfigAddress = clearingHouse.getClearingHouseConfig()
    const clearingHouseConfig = await hre.ethers.getContractAt("ClearingHouseConfig", clearingHouseConfigAddress)

    console.log("getting the exchange...")
    const exchangeAddress = await clearingHouse.getExchange()
    const exchange = await hre.ethers.getContractAt("Exchange", exchangeAddress)

    console.log("getting twap interval...")
    const twapInterval = await clearingHouseConfig.getTwapInterval()
    console.log(twapInterval)

    // TODO: Clean up the mark and index price to decimal values
    console.log("getting vbtc mark price...")
    const vbtcMark = await exchange.getSqrtMarkTwapX96(ADDRESSES.vbtc, twapInterval)
    console.log(vbtcMark)

    console.log("getting btc index price...")
    const vbtcBaseToken = await hre.ethers.getContractAt("BaseToken", ADDRESSES.vbtc)
    // console.log(vbtcBaseToken)
    const btcIndexPrice = await vbtcBaseToken.getIndexPrice(twapInterval)
    console.log(btcIndexPrice)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
