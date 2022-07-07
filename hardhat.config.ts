import * as dotenv from 'dotenv';

import { HardhatUserConfig } from 'hardhat/config';
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan';

dotenv.config();

const ACCOUNT_ONE: any = process.env.ACCOUNT_ONE;
const ROPSTEN_URL: any = process.env.ROPSTEN_URL;
const ROPSTEN_ETHERSCAN_API_KEY: any = process.env.ROPSTEN_ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.10",
  networks: {
    ropsten: {
      url: ROPSTEN_URL,
      accounts: [ACCOUNT_ONE]
    }
  },
  etherscan: {
    apiKey: {
      ropsten: ROPSTEN_ETHERSCAN_API_KEY,
    }
  },
};

export default config;
