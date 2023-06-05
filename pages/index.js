import {ethers} from 'ethers';
import {useState} from 'react';

export default function Home() {
  const [tokenURI, setTokenURI] = useState("");
  const mintNft = async () => {
    //get provider
    //get signer
    //get contract (address, ABI, signer)
    //call contract.mint()
    const contractAddress = "0xE09439e6b9E4CfC45ec2A25Ea05876Ae981adb39";
    const mintNFTABI = [{
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        }
      ],
      "name": "mintNFT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }];

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, mintNFTABI, signer);
    const tx = await contract.mintNFT(tokenURI);
    await tx.wait();
    alert("Transaction Mined" + tx.hash);
  }
  return (
    <div>
      <input onChange={(e) => setTokenURI(e.target.value)} />
      <button onClick={mintNft}>Mint NFT</button>
    </div>
  )
}
