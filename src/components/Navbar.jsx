import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/fertilizers', label: 'Fertilizers' },
  { to: '/supply-chain', label: 'Supply Chain' },
  { to: '/value-add', label: 'Value Add' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-gradient-to-b from-kalakaPurple to-slate-950 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          {Logo && (
            <img
              src={Logo}
              alt="Kalaka South Mining logo"
              className="h-8 w-auto"
            />
          )}
          <span className="text-sm font-semibold uppercase tracking-[0.2em]">
            Kalaka South Mining
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-slate-200 transition hover:text-kalakaGold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-200 hover:text-kalakaGold transition"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-slate-800 bg-kalakaPurple">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-sm text-slate-200 hover:bg-slate-900 hover:text-kalakaGold transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
