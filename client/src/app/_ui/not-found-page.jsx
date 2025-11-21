'use client';
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


export const NotFoundPageComponent = () => {
  const path = usePathname();
  const pathArray = path.split('/')
  const queryString = pathArray[pathArray.length - 1];

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
      <div className="text-center max-w-md bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20">

        <div className="text-9xl font-extrabold text-white drop-shadow-lg">
          404
        </div>

        <h2 className="mt-4 text-2xl font-semibold text-white/90">
          {`Oops… Looks like you took a path ${queryString ? `to "${queryString.toUpperCase()}` : ''}" that doesn't exist 🤔`}
        </h2>

        <p className="mt-3 text-white/80">
          The page disappeared just like a paycheck in the middle of the month.
        </p>

        <p className="mt-1 text-white/60 italic">
          (or maybe it never existed at all)
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-transform"
        >
          Return Home
        </Link>

        <div className="mt-8 animate-bounce text-white text-sm opacity-80">
          {`🚀 Don't worry, we've already sent the cats to search for the page...`}
        </div>
      </div>
    </section>
  );
}
