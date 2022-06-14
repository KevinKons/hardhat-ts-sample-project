import { ethers } from 'hardhat';
import { Greeter } from '../typechain-types';

async function main() {
    const Greeter = await ethers.getContractFactory('Greeter');
    const greeter: Greeter = await Greeter.deploy();
    console.log('Deploying...');
    await greeter.deployed();
    console.log('Contract deployed at:', greeter.address);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});