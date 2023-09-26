import Link from "next/link";
import Header from "./component/Header";

export default function Home() {
  return (
    <>
    <Header links={[{name: 'Try Demo', url: '/demo'}]}/>
      <main>
        <div className="flex flex-col gap-10 justify-center items-center text-cc3 ">
          <h1 className="text-6xl font-semibold px-4 text-center">OnChainBet</h1>
          <h1 className="text-3xl font-semibold px-4 text-center text-cc3/50"> A transparent & trustworthy betting platform.</h1>
          <Link
            href={"/bet"}
            className="text-4xl font-bold bg-cc2 px-3 py-2 rounded-lg text-cc1 shadow-xl"
          >
            Launch app
          </Link>
          
        </div>
      </main>
    </>
  );
}
