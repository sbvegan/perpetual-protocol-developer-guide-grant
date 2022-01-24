const hre = require("hardhat");

async function main() {
    // We get the contract to deploy
    const PerpExploration = await hre.ethers.getContractFactory("PerpExploration");
    const perpExploration = await PerpExploration.deploy();
    console.log("Greeter deployed to:", perpExploration.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
