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
    const veth_address = ""
    const vbtc_address = ""

    console.log("getting the clearing house...")
    const clearingHouse = await hre.ethers.getContractAt("ClearingHouse", ADDRESSES.clearing_house)
    console.log(clearingHouse)
    // console.log("getting clearing house config...")
    // const clearingHouseConfig = getClearingHouseConfig()

    // console.log("getting the exchange...")
    // const exchange = getExchange()

    // console.log("getting vbtc mark twap...")
    // const twapInterval = getTwapInterval(clearing_house_config)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
