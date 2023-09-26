"use client";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  links: { name: string; url: string }[];
  children?: React.ReactNode;
};

const Header = ({ links, children }: HeaderProps) => {
  return (
    <header className="flex justify-between py-1 items-center border-b border-cc3/30">
      <div className="flex gap-5 items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="rounded-md"
        />
        <Link href={"/"} className="text-cc3 text-2xl">
          OnChainBet
        </Link>
      </div>
      <div className="flex items-center gap-10 px-4">
        <nav className="flex gap-3">
          {links.map(({ name, url }) => (
            <Link
              key={name}
              href={url}
              className="text-cc3 text-xl font-semibold underline"
            >
              {name}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </header>
  );
};

export default Header;
