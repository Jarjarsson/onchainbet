import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-2 ">
        <Link href={"/bet"}>Bet</Link>
        <Link href={"/demo"}>Demo version</Link>
      </div>
    </main>
  );
}
