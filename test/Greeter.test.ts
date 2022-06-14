import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Greeter } from '../typechain-types';

describe('Greeter', () => {
    let greeter: Greeter;

    beforeEach(async () => {
        const Greeter = await ethers.getContractFactory('Greeter');
        greeter = await Greeter.deploy();
        await greeter.deployed();
    });

    it('When deploying Greeter should initialize message', async () => {
        expect(await greeter.message()).to.equal('I was just deployed');
    });

    it('When calling setMessage should update message', async () => {
        const message = 'Hello Blockchain!';
        await greeter.setMessage(message);

        expect(await greeter.message()).to.equal(message);
    });
});