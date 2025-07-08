"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

// Links configuration - easy to modify and add new links
const footerLinks = {
  // links: [
  //   { name: "Services", href: "/services" },
  //   // { name: "Process", href: "/process" },
  //   // { name: "Case studies", href: "/case-studies" },
  //   // { name: "Benefits", href: "/benefits" },
  // ],
  pages: [
    { name: "Home", href: "/" },
    // { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "404", href: "/404" },
  ],
  socials: [
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Linkedin", href: "#" },
    { name: "Twitter", href: "#" },
  ],
};

// Company information - easy to modify
const companyInfo = {
  name: "ScanPick",
  tagline: "ScanPick– Automate Smarter, Optimize Faster, and Grow Stronger.",
  emailPlaceholder: "jane@framer.com",
  emailPrompt: "Drop your email!! we'll get back to you :)",
  website: "ScanPick.in",
  founded: "Founded in September 2023",
  copyright: "© All right reserved 2025",
};

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
                  alt={`${companyInfo.name} Logo`}
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain text-gray-100"
                />
              </Link>
              <p className="text-gray-300">{companyInfo.tagline}</p>
            </div>

            {/* Links */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              {/* Links Section */}
              {/* <div>
                <h3 className="font-semibold text-lg mb-2">Links</h3>
                <ul className="space-y-1">
                  {footerLinks.links?.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* Pages Section */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Pages</h3>
                <div className="flex flex-row items-center space-x-2">
                  {footerLinks.pages.map((page, index) => (
                    <>
                      <Link
                        key={page.name}
                        href={page.href}
                        className="transition-colors hover:text-[#A62929]"
                      >
                        {page.name}
                      </Link>
                      {index < footerLinks.pages.length - 1 && (
                        <span className="mx-2">|</span>
                      )}
                    </>
                  ))}
                </div>
              </div>

              {/* Socials Section */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Socials</h3>
                <div className="flex flex-row space-x-4 mt-2">
                  <a href="#" aria-label="Instagram">
                    <Instagram className="w-6 h-6 hover:text-[#A62929] transition-colors" />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <Facebook className="w-6 h-6 hover:text-[#A62929] transition-colors" />
                  </a>
                  <a href="#" aria-label="Linkedin">
                    <Linkedin className="w-6 h-6 hover:text-[#A62929] transition-colors" />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <Twitter className="w-6 h-6 hover:text-[#A62929] transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 text-sm px-6 md:px-20 py-4 bg-black text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          <span>{companyInfo.website}</span>
          <span>{companyInfo.founded}</span>
          <span>{companyInfo.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
