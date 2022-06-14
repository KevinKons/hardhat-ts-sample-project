import { HardhatUserConfig } from 'hardhat/config';
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'


const config: HardhatUserConfig = {
  solidity: "0.8.10",
};

export default config;
