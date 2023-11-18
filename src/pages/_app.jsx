import "../styles/globals.css";
import { Roboto_Slab } from "next/font/google";

import Link from "next/link";

const roboto = Roboto_Slab({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div className={`mx-auto w-full font-[${roboto.className}]`}>
      <header className="bg-[#212529]/30 py-6">
        <div className="flex justify-between max-w-[960px] mx-auto items-center px-4">
          <Link href="/" className="text-[1.75em] text-[#ffcb6a]">
            GAOGAO - GATE
          </Link>
          <nav>
            <ul className="flex space-x-4 text-sm tracking-widest	text-white">
              <li className="p-4">
                <Link href="/test">TEST</Link>
              </li>
              <li className="p-4">
                <Link href="/index.html">ABOUT</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="mt-8 h-full max-w-[960] mx-auto">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
