require('@nomiclabs/hardhat-waffle');    // plugin to build smart contract tests

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/tyOS3jdIYcKPLaBePpLpPKGw_RI_rvZK',  // alchemy key for app
      accounts: [ '55b84831e846025c872c23c7a851462bd2f2ce69d91356496918a91c7af31fef']  // our metmask wallet private key
    }
  }
}