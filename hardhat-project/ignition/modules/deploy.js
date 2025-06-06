const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("PLContract", async (m) => {
  // 部署合约
  const contract = await m.deploy("PLContract", []);
  // 调用合约的 name 方法
  const name = await m.call(contract, "name", []);
  console.log("Contract Name:", name);

  return { contract };
});