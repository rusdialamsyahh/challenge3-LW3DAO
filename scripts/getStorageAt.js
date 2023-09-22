const hre = require("hardhat");
const { ethers } = require("ethers");

const getStorageValue = async (rpcURL, contractAddress, slotNumber) => {
  const provider = new ethers.getDefaultProvider(rpcURL); 

  
  try {
    const storageValue = await provider.getStorageAt(contractAddress, slotNumber);
    console.log(`\nResponse:`);
    console.log(`Storage Value at Slot ${slotNumber}: 0x${storageValue}`);
  } catch (error) {
    console.error("Error:", error);
  }
};

async function main() {
  const contractAddress = "0xf84Df872D385997aBc28E3f07A2E3cd707c9698a"; 
  const slotNumber = 0; 
  const rpcURL = hre.network.config.url; 

  let printLogs = {
    contract: contractAddress,
    slotNumber: slotNumber,
    rpcURL: rpcURL,
  };

  console.log(printLogs);

  await getStorageValue(rpcURL, contractAddress, slotNumber);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
