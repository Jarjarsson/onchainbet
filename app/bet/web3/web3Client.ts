import Web3 from "web3";
import abi from "../constants/abi";
import contractAddress from "../constants/address";

const web3 = new Web3(
  "wss://eth-sepolia.g.alchemy.com/v2/ET7Rh8pt9Djc9dEaYvVcxhWd5EtIn3PK"
);

const onChainBet = new web3.eth.Contract(abi, contractAddress);

const placeBet = async (
  contractAddress: string,
  address: string,
  multiplier: number,
  amount: number
) => {
  const transactionParameters = {
    to: contractAddress,
    from: address,
    data: onChainBet.methods.placeBet().encodeABI(),
    value: amount,
    multiplier: multiplier
  };

  try {
    const txHash = await (window as any).ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      status: "Success! Transaction hash: " + txHash,
    };
  } catch (error) {
    return {
      status: "Something went wrong",
    };
  }
};

const connectWallet = async () => {
  if ((window as any).ethereum) {
    try {
      const addressArray = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        connected: true,
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        connected: false,
      };
    }
  } else {
    return {
      address: "",
      connected: false,
    };
  }
};

export { placeBet, connectWallet };
