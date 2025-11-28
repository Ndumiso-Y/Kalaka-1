import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/images/Hero.png';

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          alt="Kalaka South Mining operations"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kalakaPurple/95 via-kalakaPurple/85 to-kalakaPurple/70"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-kalakaGold">
              Kalaka South Mining SA (Pty) Ltd.
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Reliable Fertilizer Supply Across Africa
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
              Physical commodities trading focused on fertilizers and mining services.
              We deliver security of supply to blenders, wholesalers, and distributors
              across the African market with proven expertise in bulk, break bulk, and
              containerized logistics.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-md bg-kalakaGold px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-kalakaGold/90"
              >
                Request Supply Proposal
              </Link>
              <a
                href="/kalaka-fertilizer-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-kalakaGold hover:text-kalakaGold"
              >
                Download Fertilizer Profile
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
              <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-6 backdrop-blur-sm">
                <p className="text-3xl font-bold text-kalakaGold">30,000+</p>
                <p className="mt-2 text-sm text-slate-300">Tons per month capacity</p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-6 backdrop-blur-sm">
                <p className="text-3xl font-bold text-kalakaGold">Regional</p>
                <p className="mt-2 text-sm text-slate-300">Deliveries into Zambia & Mozambique</p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-6 backdrop-blur-sm sm:col-span-2">
                <p className="text-3xl font-bold text-kalakaGold">3 Formats</p>
                <p className="mt-2 text-sm text-slate-300">Bulk, Break Bulk & Containerized Supply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
