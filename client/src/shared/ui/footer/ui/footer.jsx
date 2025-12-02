'use client';
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <Link href="/">
          <Image
            src="/assets/logo/logo.svg"
            alt="Logo"
            width={200}
            height={200}
            loading="eager"
          />
        </Link>
        <div className="flex space-x-4 mb-4 sm:mb-0">
          <Link
            href="/privacy-policy"
            className="hover:text-blue-500 transition-colors"
          >
            Privacy Policy
          </Link>
          <a
            href="https://github.com/antonlazurko"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            Author
          </a>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Quotes App. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
