const Migrations = artifacts.require("Migrations");
const MUTT = artifacts.require('MUTT')

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(MUTT);
  const token = await MUTT.deployed()
  await token.mint('0x26890D61233acb48a404A60CD543Edb7Bf5AB374','1000000000000000000000')
};
