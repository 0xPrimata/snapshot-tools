const ethers = require("ethers");
const fs = require("fs");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


async function fetchMetadata(tokenId) {
//   const contract = new ethers.Contract(
//     "0x357928B721890Ed007142e45502A323827caF812",
//     ["function tokenURI(uint256 _tokenId) public view returns (string)"],
//     provider
//   );
//   let tokenURI = await contract.tokenURI(tokenId);
//   tokenURI = tokenURI.replace('ipfs://', 'https://joepegs.mypinata.cloud/ipfs/');
    let tokenToWrite = String(tokenId >= 3118 ? tokenId - 3118 : tokenId + 62);
    let tokenURI = 'https://joepegs.mypinata.cloud/ipfs/bafybeiha5fn33qi3zlp4zemrqidcp3l3qt4pxayb6uuj24qziyghgpupbu/' + tokenToWrite;
  const metadata = await fetch(tokenURI).then((res) => res.json());
  
  console.log(metadata);
  fs.writeFileSync('./metadata/' + tokenId, JSON.stringify(await metadata), (err) => {console.log(err)});
}
async function retrieve() {
    for (let i = 0; i < 115; i++) {
        fetchMetadata(i);
          await halt(1000);
      }   
}
const halt = (ms) => new Promise((r) => setTimeout(r, ms));


retrieve();