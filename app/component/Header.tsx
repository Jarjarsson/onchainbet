'use client';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between px-8 py-2 items-center ">
      <Image
        src="/logo.png"
        alt="logo"
        width={80}
        height={80}
        className="rounded-md"
      />
      <nav className="flex gap-3">
        <Link
          href={'/'}
          className="text-cc3 text-xl font-semibold bg-cc3/50 px-3 py-2 rounded-lg"
        >
          HOME
        </Link>
        <Link
          href={'/demo'}
          className="text-cc3 text-xl font-semibold bg-cc3/50 px-3 py-2 rounded-lg"
        >
          DEMO
        </Link>
      </nav>
    </header>
  );
};

export default Header;
