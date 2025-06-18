'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">MySite</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 ml-10 flex-1">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact Us</Link>

          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="ml-6 px-2 py-1 rounded text-black"
          />
        </div>

        {/* Login */}
        <div className="hidden md:block ml-auto">
          <Link href="/login">
            <button className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-200">
              Login
            </button>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block px-4 py-2">Home</Link>
          <Link href="/about" className="block px-4 py-2">About Us</Link>
          <Link href="/services" className="block px-4 py-2">Services</Link>
          <Link href="/contact" className="block px-4 py-2">Contact Us</Link>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full px-4 py-2 text-black"
          />
          <Link href="/login" className="block px-4 py-2 bg-white text-blue-700 rounded text-center mx-4">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
