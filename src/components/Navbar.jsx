import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
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
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-950/95 backdrop-blur">
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
        <div className="flex items-center gap-4">
          <nav className="hidden gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-slate-700 dark:text-slate-200 transition hover:text-kalakaGold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={toggleTheme}
            className="hidden md:block text-slate-700 dark:text-slate-200 hover:text-kalakaGold transition"
            aria-label="Toggle theme"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {theme === 'dark' ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              )}
            </svg>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 dark:text-slate-200 hover:text-kalakaGold transition"
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
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-kalakaGold transition"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setMobileMenuOpen(false);
            }}
            className="flex w-full items-center gap-2 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-kalakaGold transition"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {theme === 'dark' ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              )}
            </svg>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
