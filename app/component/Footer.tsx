const Footer = () => {
  return (
    <footer className="bg-cc3/30 flex justify-between text-cc1/60 items-center px-5 py-2 ">
      <p className="items-center">© Copyright Developoors | 2023</p>

      <div className="flex gap-2">
        <p>
          <a
            href="https://sepolia.etherscan.io/address/0x499d0777bca6e72fa25d79d3aaacd3df9fd5b9ba"
            target="_blank"
          >
            View contract address |
          </a>
        </p>
        <p>
          Network:{' '}
          <a href="https://sepoliafaucet.com/" target="_blank">
            Sepolia Testnet |
          </a>{' '}
        </p>
        <p>
          <a href="https://www.coincarp.com/chainlist/sepolia/" target="_blank">Metamask setup guide</a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
