import Web3 from 'web3';
import abi from '../constants/abi';
import contractAddress from '../constants/address';
import { ReturnValues } from '@/app/type';


const web3 = new Web3(
  'wss://eth-sepolia.g.alchemy.com/v2/ET7Rh8pt9Djc9dEaYvVcxhWd5EtIn3PK'
);

const ethToWei = (eth: number) =>
  Number(Web3.utils.toWei(eth.toString(), 'ether'));
const weiToEth = (wei: number) =>
  Number(Web3.utils.fromWei(wei.toString(), 'ether'));
const onChainBet = new web3.eth.Contract(abi, contractAddress);

const placeBet = async (
  contractAddress: string,
  address: string,
  multiplier: number,
  amount: number
) => {
  const transactionParameters = {
    from: address,
    to: contractAddress,
    data: onChainBet.methods.placeBet(multiplier.toString(16)).encodeABI(),
    value: Number(ethToWei(amount)).toString(16),
  };
  try {
    const txHash = await (window as any).ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    return {
      status: 'Success! Transaction hash: ' + txHash,
    };
  } catch (error) {
    return {
      status: 'Something went wrong',
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
        method: 'eth_requestAccounts',
      });
      const obj = {
        connected: true,
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: '',
        connected: false,
      };
    }
  } else {
    return {
      address: '',
      connected: false,
    };
  }
};

const gameResult = (
  callback: (event: ReturnValues) => void,
  address: string
) => {
  onChainBet.events.GameResult().on('data', event => {
    const data: ReturnValues = event.returnValues as ReturnValues;
    if (data.playerAddress.toLowerCase() === address) {
      callback(data);
    }
  });
};
export { placeBet, connectWallet, getMaxBet, ethToWei, gameResult };
