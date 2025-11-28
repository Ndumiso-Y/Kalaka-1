import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/fertilizers', label: 'Fertilizers' },
  { to: '/supply-chain', label: 'Supply Chain' },
  { to: '/value-add', label: 'Value Add' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/contact', label: 'Contact' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            {Logo && (
              <img
                src={Logo}
                alt="Kalaka South Mining logo"
                className="h-10 w-auto"
              />
            )}
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Kalaka South Mining – Your Trading Partner
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-kalakaGold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-600 dark:text-slate-300 transition hover:text-kalakaGold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-kalakaGold">
              Contact
            </h3>
            <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <p>info@kalakasouth.com</p>
              <p>+27 (0) 11 123 4567</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Johannesburg, South Africa</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-300 dark:border-slate-800 pt-8 text-center text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Kalaka South Mining SA (Pty) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
