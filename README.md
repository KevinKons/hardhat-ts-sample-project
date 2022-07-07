<br />
<p align="center">
  <img src="https://duckduckgo.com/i/ddebb07e.png" alt="Ethereum" width="90">
</p>

## About The Project

This project contains a sample hardhat starter project that uses ethers.js and TypeScript.

<br />

# Running the project

### Pre-Requisites
This project require `Node.js`. 

### Building the project

```
yarn
yarn hardhat clean
yarn hardhat compile
```

### Running tests
```
yarn hardhat test
```

### Running deploy scripts
```
yarn hardhat run scripts/deploy.js
```

### Running contracts verifications

```
yarn hardhat verify 
--network ropsten 
--show-stack-traces 
<contract_address>
```