import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex justify-between px-8 py-2 items-center ">
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="rounded-md"
        />
        <Link
            href={"/demo"}
            className="text-cc3 text-xl font-semibold bg-cc3/50 px-3 py-2 rounded-lg"
          >
            Try Demo
          </Link>
      </header>
      <main>
        <div className="flex flex-col gap-10 justify-center items-center text-cc3 ">
          <h1 className="text-6xl font-semibold px-4 text-center">OnChainBet</h1>
          <h1 className="text-3xl font-semibold px-4 text-center text-cc3/50"> A transparent & trustworthy betting platform.</h1>
          <Link
            href={"/bet"}
            className="text-4xl font-bold bg-cc2 px-3 py-2 rounded-lg text-cc1 shadow-xl"
          >
            BET
          </Link>
          
        </div>
      </main>
    </>
  );
}
