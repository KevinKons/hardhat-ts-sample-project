import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { LimitlessCollection } from '../typechain-types';

describe('LimitlessCollection', () => {
    let contract: LimitlessCollection;
    let owner: SignerWithAddress
    let bob: SignerWithAddress;

    beforeEach(async () => {
        [owner, bob] = await ethers.getSigners();

        const LimitlessCollection = await ethers.getContractFactory('LimitlessCollection');
        contract = await LimitlessCollection.deploy('baseuri');
        await contract.deployed();
    });

    it('When deploying should set owner and distribuitionPhase to closed', async () => {
        expect(await contract.owner()).to.equal(owner.address);
        expect(await contract.distributionPhase()).to.equal(0);
    });

    it('When distributionPhase is closed shouldnt be able to buy NFT', async () => {
        await expect(contract.connect(bob).buyNFT()).to.be.revertedWith('Sale is closed');
    });
});