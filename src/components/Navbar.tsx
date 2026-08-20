'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 30);
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          // Offset compensation for fixed navbar height
          const top = el.offsetTop - 90;
          const height = el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-200 ${
        hasShadow ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex justify-between items-center">
        <Link href="#home" className="flex items-center gap-2.5">
          <Image
            src="/Images/Logo HTA.png"
            alt="Logo HTA"
            width={34}
            height={34}
            className="w-8 h-auto"
            unoptimized
          />
          <span className="text-xl font-bold gradient-title">
            HoangTheAnalyst
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-7 font-medium text-sm">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`transition-colors duration-200 hover:text-amber-500 relative py-1 ${
                  activeSection === item.id
                    ? 'text-amber-500 font-semibold'
                    : 'text-gray-600'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-7 h-7 cursor-pointer"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-800 transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-800 transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-800 transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white border-b border-gray-200 py-4 gap-4 shadow-xl">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium ${
                  activeSection === item.id
                    ? 'text-amber-500 font-bold'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}