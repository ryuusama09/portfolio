import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/sections';

export default function NotFound() {
  return (
    <div className="absolute inset-0 -z-10 flex min-h-[100vh] flex-col bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:bg-[size:20px_20px]">
      <main className="flex-1 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:bg-[size:20px_20px]">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-8 px-4 py-20">
          <Image
            src="/images/astronaut.jpg"
            alt="Lost Astronaut"
            width={300}
            height={96}
            className="mx-auto mb-4"
            priority={true}
          />
          <h2>Whoops! That page is lost in space!</h2>
          <p>
            We couldn&apos;t find the page you were looking for. Maybe it
            drifted away on a solar flare?
          </p>
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className="text-md group inline-flex max-w-fit items-center justify-center gap-2 space-x-2 rounded-xl border border-gray-600 bg-gray-800 px-3 py-2 text-base text-white transition hover:border-gray-900 hover:bg-gray-800 hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-yellow-500/80 focus-visible:ring-offset-2 active:bg-black"
            >
              Take me back to Earth (Homepage)
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
