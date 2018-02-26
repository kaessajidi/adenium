var AdeniumLabsToken = artifacts.require("./AdeniumLabsToken.sol");
var _owner = "0x821aEa9a577a9b44299B9c15c88cf3087F3b5544";

module.exports = function(deployer) {
    deployer.deploy(AdeniumLabsToken, { from: _owner, gas: 4700000 }).then(() => {
        return AdeniumLabsToken.deployed().then(instance => {
            var token = instance
            token.name.call().then(name => {
                console.log("Token Name :", name)
            })
            token.symbol.call().then(symbol => {
                console.log("Token Symbol :", symbol)
            })
            token.totalSupply.call().then(total => {
                console.log("Total Supply :", total.toNumber())
            })
            token.owner.call().then(owner => {
                console.log("Supply Owner:", owner)
                token.balanceOf.call(owner).then(total => {
                    console.log("Total owner :", total.toNumber())
                })
            })
        })
    })
};