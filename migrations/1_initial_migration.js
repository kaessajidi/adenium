var Migrations = artifacts.require("./lifecycle/Migrations.sol");
var _owner = "0x821aEa9a577a9b44299B9c15c88cf3087F3b5544";

module.exports = function(deployer) {
    deployer.deploy(Migrations, { from: _owner, gas: 4700000 });
};