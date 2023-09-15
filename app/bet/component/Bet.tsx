import React, { useEffect, useState } from 'react';

import contractAddress from '../constants/address';
import { useTContext } from '../../context/Context';
import { ethToWei, gameResult, getMaxBet, placeBet } from '../web3/web3Client';

const Bet = () => {
  const [multiplier, setMultiplier] = useState(2);
  const { wallet } = useTContext();
  const [amount, setAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(0);
  useEffect(() => {
    (async () => {
      setMaxAmount(await getMaxBet());
    })();
    gameResult(value=>{
      console.log(value);
    })
  }, []);

  const handleBet = (multiplier: number) => {
    console.log(amount);
    if (amount>0){
      placeBet(contractAddress, wallet, multiplier, amount);
    }
  };

  return (

    <section className='flex flex-col'>
      <label htmlFor="multiplierRange">Multiplier (`${multiplier}`):</label>
      <input
      id='multiplierRange'
        type="range"
        value={multiplier}
        min={2}
        max={10}
        onChange={e => setMultiplier(Number(e.target.value))}
      />
      <label htmlFor="betAmount">Bet Amount</label>
      <input id='betAmount' type="number" min={0} max={maxAmount} placeholder={` Bet up to ${maxAmount}`}/>
      <button onClick={() => handleBet(multiplier)}>Place bet</button>
    </section>
  );
};

export default Bet;
