import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 border-b bg-white text-black shadow-md">
      {/* Logo or Initials */}
      <div className="text-xl font-bold border border-black px-2 py-1 rounded">YG</div>

      {/* Scroll Links */}
      <nav className="flex flex-wrap gap-6 text-sm font-medium">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#blog" className="hover:underline">Blog</a>
        <a href="#research" className="hover:underline">Research</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}