var Voting = artifacts.require('./Voting.sol')
module.exports = function (deployer) {
  deployer.deploy(Voting, ['0x6c00000000000000000000000000000000000000000000000000000000000000', '0x6c00000000000000000000000000000000000000000000000000000000000000', '0x6c00000000000000000000000000000000000000000000000000000000000000'], { gas: 500000 });
};
