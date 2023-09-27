import { useEffect, useState } from "react";
import { connectWallet, checkConnection } from "../bet/web3/web3Client";
import { cropWallet } from "../utils/utils";

type Prop = {
  cb: (address: string) => void;
};

const ConnectButton = ({ cb }: Prop) => {
  const [wallet, setWallet] = useState("");
  const handleSelectWallet = async () => {
    await connectWallet().then((res) => {
      setWallet(res.address);
      cb(res.address);
    });
  };

  useEffect(() => {
    (async () => {
      const address = await checkConnection();
      if (address !== "") {
        setWallet(address);
        cb(address);
      }
    })();
  }, [setWallet, cb]);

  return (
    <>
      {wallet !== "" ? (
        <p className="px-2 py-2 font-semibold text-cc2 bg-cc3/20 rounded-md select-none">
          Wallet : {wallet !== "" && cropWallet(wallet)}
        </p>
      ) : (
        <button
          onClick={handleSelectWallet}
          className="px-2 py-2 font-semibold text-cc2 bg-cc3/20 rounded-md select-none"
        >
          Connect wallet
        </button>
      )}
    </>
  );
};

export default ConnectButton;
