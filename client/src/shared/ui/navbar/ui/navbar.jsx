'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathName = usePathname();
  const isActive = (href) => pathName === href ? "text-blue-600 font-semibold underline" : ""

  return (
  <nav className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <Link href="/">
        <Image
          src="/assets/logo/logo.svg"
          alt="Logo"
          width={200}
          height={200}
          loading="eager"
        />
      </Link>
      <ul className="flex items-center gap-10">
        <li>
          <Link
            href="/search"
            className={`text-gray-700 hover:text-blue-600 hover:scale-110 transition flex items-center gap-1 ${ isActive("/search")}`}
          >
            <Image
              src="/assets/icons/search-icon.svg"
              alt="Logo"
              width={32}
              height={32}
              loading="eager"
            />
            Search
          </Link>
        </li>
        <li>
          <Link
            href="/quotes/modify"
            className={`text-gray-700 hover:text-blue-600 hover:scale-110 transition flex items-center gap-1 ${ isActive("/quotes/modify")}`}
          >
            <Image
              src="/assets/icons/create-icon.svg"
              alt="Logo"
              width={32}
              height={32}
              loading="eager"
            />
            Create Quote
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);}