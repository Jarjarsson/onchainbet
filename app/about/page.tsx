import Image from "next/image";
import Header from "../component/Header";

const User = ({
  name,
  github,
  linkedin,
  image,
}: {
  name: string;
  github: string;
  linkedin: string;
  image: string;
}) => {
  return (
    <li className="flex flex-col items-center bg-cc1 rounded-lg p-6">
      <Image
        className="rounded-full"
        src={image}
        alt={name}
        width={100}
        height={100}
      />
      <p className="text-cc3 font-bold mt-3">{name}</p>
      <a className="text-cc2" href={github}>
        GitHub
      </a>
      <a className="text-cc2" href={linkedin}>
        LinkedIn
      </a>
    </li>
  );
};

const page = () => {
  return (
    <>
      <Header links={[]}></Header>
      <main className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center w-2/3 gap-6">
          <h1 className="text-4xl text-cc3 self-start">About OnChainBet</h1>
          <p className="text-cc4 py-4 text-justify">
            OnChainBet is an decentralized application (dApp) made in about
            three weeks as part of the post-graduate program at {"</salt>"}.
            This application allows you to place bets using a decentralized
            gambling algorithm ensuring a fair and transparent gaming
            experience. The Solidity smart contract that can be viewed{" "}
            <span>
              <a
                className="text-cc2 underline"
                href="https://sepolia.etherscan.io/address/0x499d0777bca6e72fa25d79d3aaacd3df9fd5b9ba#code"
                target="_blank"
              >
                here
              </a>
            </span>
            .
          </p>
          <a
            className="text-cc2 self-end"
            href="https://github.com/Jarjarsson/onchainbet"
            target="blank"
          >
            View source code
          </a>
          <h1 className="text-4xl text-cc3 self-start">Team Developoors</h1>

          <ul className="flex gap-10 w-full">
            <User
              name="Jou-Fang Wang"
              image="https://avatars.githubusercontent.com/u/81062114?v=4"
              github="https://github.com/rofunn"
              linkedin="https://www.linkedin.com/in/jou-fang-wang-44a14a16b/"
            ></User>
            <User
              name="Allan Heremi"
              image="https://avatars.githubusercontent.com/u/121552608?v=4"
              github="https://github.com/allanheremi"
              linkedin="https://www.linkedin.com/in/allanheremi/"
            ></User>
            <User
              name="Rasmus Eklund"
              image="https://avatars.githubusercontent.com/u/49008491?v=4"
              github="https://github.com/rasmus-eklund"
              linkedin="https://www.linkedin.com/in/rasmus-eklund-36348255/"
            ></User>
          </ul>
        </div>
      </main>
    </>
  );
};

export default page;
