"use client";

import "./globals.css";
import { Nunito } from "next/font/google";
import { Header } from "@/components";
import { SocialButton } from "@/components";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
import Head from 'next/head';
import Link from 'next/link';

const nunito = Nunito({ weight: ["300", "400", "600", "700"], subsets: ["latin"] });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <title>Christian Okyere | Computer Science & Mathematics</title>
        <meta name="description" content="Computer Science and Mathematics student at Colby College with experience in software engineering, teaching, and technical project development." />
      </Head>
      <body className={nunito.className}>
        <div className="w-full h-full fixed top-0 z-0">
          <div className="w-full h-full relative workspace-bg">
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>

        <main className="relative min-h-screen flex flex-col">
          <nav className="relative z-10 nav-bg border-b border-white/10 sticky top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-white font-bold text-xl text-shadow">
                    Christian Okyere
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                  <Link href="/" className="nav-link text-white hover:text-blue-300 px-3 py-2 text-sm font-medium">
                    Home
                  </Link>
                  <Link href="/aboutMe" className="nav-link text-white hover:text-blue-300 px-3 py-2 text-sm font-medium">
                    About Me
                  </Link>
                  <Link href="/projects" className="nav-link text-white hover:text-blue-300 px-3 py-2 text-sm font-medium">
                    Projects
                  </Link>
                  <Link href="/contact" className="nav-link text-white hover:text-blue-300 px-3 py-2 text-sm font-medium">
                    Contact
                  </Link>
                  <a 
                    href="https://drive.google.com/file/d/1OU7HlCJh2w1W-XiXykw1D1_BGh3Sg-7V/view?usp=drive_link" 
                    target="_blank" 
                    className="ml-4 btn-outline text-white border-white hover:bg-white/20 hover:text-white"
                  >
                    <FaFileAlt className="inline mr-2" />Resume
                  </a>
                </div>
              </div>
            </div>
          </nav>
          
          <div className="flex-grow relative z-10">
            {children}
          </div>

          <footer className="relative z-10 footer-bg border-t border-white/10 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-8 md:mb-0">
                  <h3 className="text-xl font-semibold mb-4 text-shadow">Christian Okyere</h3>
                  <p className="max-w-md text-gray-300">
                    Computer Science and Mathematics student at Colby College, passionate about 
                    software development, data analysis, and creating meaningful technology solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-shadow">Let's Connect</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="mailto:christian.okyere@colby.edu" 
                      className="text-white hover:text-blue-300 transition-colors"
                      aria-label="Email"
                    >
                      <AiOutlineMail size={24} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/christianokyere07" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-blue-300 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <AiFillLinkedin size={24} />
                    </a>
                    <a 
                      href="https://github.com/Christian-Kofi-Okyere" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-blue-300 transition-colors"
                      aria-label="GitHub"
                    >
                      <AiFillGithub size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} Christian Okyere. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
