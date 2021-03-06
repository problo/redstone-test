const { WrapperBuilder } = require("redstone-evm-connector");

describe("Avalanche contract", function () {
  let exampleContract;

  beforeEach(async () => {
    const ExampleContract = await ethers.getContractFactory("AvalanchePrice");
    exampleContract = await ExampleContract.deploy();
  });

  it("AVAX price test - price package", async function () {
    exampleContract = WrapperBuilder
      .wrapLite(exampleContract)
      .usingPriceFeed("redstone-avalanche-prod");
    await exampleContract.setPriceUSDForAVAX();
    let priceFromContract = await exampleContract.getLastPrice();
    console.log({ priceFromContract: priceFromContract.toNumber() });
  });
  it("AVAX price test - single price", async function () {
    exampleContract = WrapperBuilder
      .wrapLite(exampleContract)
      .usingPriceFeed("redstone-avalanche-prod");
    await exampleContract.setPrice();
    const priceFromContract = await exampleContract.getLastPrice();
    console.log({ priceFromContract: priceFromContract.toNumber() });
  });
  it("AVAX price test - single price", async function () {
    exampleContract = WrapperBuilder
      .wrapLite(exampleContract)
      .usingPriceFeed("redstone-avalanche-prod", { asset: "AVAX" });
    await exampleContract.setPrice();
    const priceFromContract = await exampleContract.getLastPrice();
    console.log({ priceFromContract: priceFromContract.toNumber() });
  });
});
