"use client";

import Link from "next/link";
import Image from "next/image";

export const Navbar = () => (
  <nav className="w-full bg-white border-b border-gray-200 px-6 py-3">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <Link href="/" className="text-xl font-bold text-gray-900">
        <Image
          src="/assets/logo/logo.svg"
          alt="Logo"
          width={32}
          height={32}
        />
      </Link>
      <ul className="flex items-center gap-6">
        <li>
          <Link
            href="/search"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            href="/quotes"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Quotes
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);