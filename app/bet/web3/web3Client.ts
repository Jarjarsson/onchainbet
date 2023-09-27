import Web3 from "web3";
import abi from "../constants/abi";
import contractAddress from "../constants/address";
import { ReturnValues } from "@/app/type";
import "dotenv";

const web3 = new Web3(process.env.NEXT_PUBLIC_API_WSS);

const ethToWei = (eth: number) =>
  Number(Web3.utils.toWei(eth.toString(), "ether"));
const weiToEth = (wei: number) =>
  Number(Web3.utils.fromWei(wei.toString(), "ether"));
const onChainBet = new web3.eth.Contract(abi, contractAddress);

const placeBet = async (
  contractAddress: string,
  address: string,
  multiplier: number,
  amount: number,
) => {
  const multiplierBN = web3.utils.toBigInt(multiplier);
  const transactionParameters = {
    from: address,
    to: contractAddress,
    data: onChainBet.methods.placeBet(multiplierBN.toString()).encodeABI(),
    value: ethToWei(amount).toString(16),
  };
  try {
    const txHash = await (window as any).ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      status: "Success!",
      tx: txHash,
    };
  } catch (error) {
    return {
      status: "Something went wrong",
      tx: "",
    };
  }
};

const getMaxBet = async () => {
  const eth = await web3.eth.getBalance(contractAddress); // wei
  const maxEth = Number(eth) / 12;
  return weiToEth(maxEth);
};

const connectWallet = async () => {
  if ((window as any).ethereum) {
    try {
      const addressArray = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "success",
        connected: true,
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        status: "failed to get addresses",
        address: "",
        connected: false,
      };
    }
  } else {
    return {
      status: "metamask not connected",
      address: "",
      connected: false,
    };
  }
};

const gameResult = (
  callback: (event: ReturnValues) => void,
  address: string,
) => {
  onChainBet.events.GameResult().on("data", (event) => {
    const data: ReturnValues = event.returnValues as ReturnValues;
    if (data.playerAddress.toLowerCase() === address) {
      callback(data);
    }
  });
};

export const checkConnection = async () => {
  if ((window as any).ethereum) {
    const accounts = await (window as any).ethereum.request({
      method: "eth_accounts",
    });
    if (accounts.length == !0) return accounts[0];
  }
  return "";
};

export { placeBet, connectWallet, getMaxBet, ethToWei, gameResult, weiToEth };
