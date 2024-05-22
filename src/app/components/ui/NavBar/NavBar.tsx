"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import { FaVideo } from 'react-icons/fa'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav className={`bg-blue-900 w-full sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`} id="navbar">
      <div className="flex flex-col md-lg:flex-row items-start p-4 w-full">
        <div className="flex-shrink-0 my-auto">
          <Logo />
        </div>
        <div className="flex flex-col flex-grow w-full md-lg:ml-4">
          <div className="flex justify-between w-full text-white text-sm">
            <div className="hidden md-lg:flex space-x-4 flex-1 justify-between">
              <span className="flex-1 text-center">Thu 24 Feb 2024 / UAE VS SCOTLAND Mens 50 Over Warm-Up</span>
              <span>|</span>
              <span className="flex-1 text-center">Mon 26 Feb 2024 / UAE VS SCOTLAND Mens 50 Over Warm-Up</span>
              <span>|</span>
              <span className="flex-1 text-center">Fri 01 Mar 2024 / CANADA VS SCOTLAND Mens 50 Over Warm-Up</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md-lg:flex items-center space-x-2 bg-transparent text-white py-1 px-3 rounded">
                <FaVideo className="text-white" />
                <span>FOLLOW CS LIVE</span>
              </button>
            </div>
          </div>
          <div className="border-t border-white my-2"></div>
          <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
            <ul className="hidden md-lg:flex space-x-4 text-white">
              <li>
                <Link href="/competitive">Competitive</Link>
              </li>
              <li>
                <Link href="/play">Play</Link>
              </li>
              <li>
                <Link href="/explore">Explore</Link>
              </li>
              <li>
                <Link href="/find-a-club">Find a club</Link>
              </li>
            </ul>

            <div className="hidden md-lg:flex items-center space-x-4 mt-2 md:mt-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-white placeholder-gray-400 border-b-2 border-gray-400 focus:outline-none focus:border-white pl-10 py-1"
                />
                <svg className="absolute left-0 top-0 mt-1 ml-2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.75-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path>
                </svg>
              </div>
              <Link href="/register" className="text-white">REGISTER</Link>
              <Link href="/membership" className="text-white">MEMBERSHIP</Link>
              <Link href="/accessibility" className="text-white">ACCESSIBILITY</Link>
            </div>
          </div>
        </div>

        <div className="md-lg:hidden flex w-full justify-end">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md-lg:hidden">
            <ul className="space-y-4 text-white p-4">
              <li>
                <Link href="/competitive">Competitive</Link>
              </li>
              <li>
                <Link href="/play">Play</Link>
              </li>
              <li>
                <Link href="/explore">Explore</Link>
              </li>
              <li>
                <Link href="/find-a-club">Find a club</Link>
              </li>
              <li>
                <Link href="/register">REGISTER</Link>
              </li>
              <li>
                <Link href="/membership">MEMBERSHIP</Link>
              </li>
              <li>
                <Link href="/accessibility">ACCESSIBILITY</Link>
              </li>
              <li>
                <input type="text" placeholder="Search" className="p-2 rounded-md w-full" />
              </li>
            </ul>
            <button className="flex items-center space-x-2 bg-transparent text-white py-1 px-3 rounded">
                <FaVideo className="text-white" />
                <span>FOLLOW CS LIVE</span>
              </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
