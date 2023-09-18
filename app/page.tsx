import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="rounded-md"
        />
      </header>
      <main>
        <div className="flex flex-col gap-10 justify-center items-center pt-16 ">
          <Link
            href={"/bet"}
            className="text-cc3 text-4xl font-bold bg-cc3/50 px-3 py-2 rounded-lg"
          >
            BET
          </Link>
          <Link
            href={"/demo"}
            className="text-cc3 text-4xl font-bold bg-cc3/50 px-3 py-2 rounded-lg"
          >
            DEMO VERSION
          </Link>
        </div>
      </main>
    </>
  );
}
