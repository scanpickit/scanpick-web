"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-black text-white">
      <div className="w-full px-6 md:px-20 py-12 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-[70%] h-[200px] bg-[radial-gradient(ellipse_at_top,rgba(166,41,41,0.4),transparent)] mx-auto blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Left Column */}

            <div className="flex-1 space-y-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="ScanPick Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain text-gray-100"
                  
                />
              </Link>
              <p className="text-gray-300">
                ScanPick– Automate Smarter, Optimize Faster, and Grow Stronger.
              </p>
              <p className="text-sm text-gray-400">
                Drop your email!! we'll get back to you :)
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <input
                  type="email"
                  placeholder="jane@framer.com"
                  className="px-4 py-2 bg-zinc-900 text-white rounded-md border border-zinc-700 focus:outline-none"
                />
                {/* <button className="bg-[#A62929] text-white px-5 py-2 rounded-md hover:bg-[#8f1e1e] transition-all">
                SEND
              </button> */}
              </div>
            </div>

            {/* Links */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-lg mb-2">Links</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/process">Process</Link>
                  </li>
                  <li>
                    <Link href="/case-studies">Case studies</Link>
                  </li>
                  <li>
                    <Link href="/benefits">Benefits</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Pages</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/404">404</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Socials</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Linkedin</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 text-sm px-6 md:px-20 py-4 bg-black text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          <span>ScanPick.in</span>
          <span>Founded in September 2023</span>
          <span>© All right reserved 2025</span>
        </div>
      </div>
    </footer>
  );
}
