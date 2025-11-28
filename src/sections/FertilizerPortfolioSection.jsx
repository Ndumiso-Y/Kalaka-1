import React from 'react';
import { Link } from 'react-router-dom';
import FertilizerImage from '../assets/images/Fertilizer.png';
import FertilizerHandImage from '../assets/images/FertilizerHand.png';
import FertilizerSortingImage from '../assets/images/FertilizerSorting.png';

const productGroups = [
  {
    category: 'Nitrogen',
    products: ['Urea 46%', 'Ammonium Sulphate (Capro & Crystal)', 'CAN (Calcium Ammonium Nitrate)'],
    packaging: 'Bulk, jumbo bags, containers',
  },
  {
    category: 'Phosphates',
    products: ['DAP (Di-Ammonium Phosphate)', 'TSP (Triple Super Phosphate)', 'GSSP (Granular Single Super Phosphate)'],
    packaging: 'Bulk, jumbo bags, containers',
  },
  {
    category: 'Potash & Blends',
    products: ['NPK blends', 'SOP (Sulphate of Potash)', 'MOP (Muriate of Potash)'],
    packaging: 'Bulk, jumbo bags, containers',
  },
];

function FertilizerPortfolioSection() {
  return (
    <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-kalakaGold">
            FERTILIZER PORTFOLIO
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-slate-900 dark:text-slate-100">
            Full Range of Nitrogen & Phosphate Fertilizers
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            We supply a comprehensive portfolio of fertilizer products to blenders, wholesalers,
            and distributors across Africa. Our sourcing network ensures competitive pricing and
            reliable availability year-round.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="group overflow-hidden rounded-lg">
            <img
              src={FertilizerImage}
              alt="Fertilizer products"
              className="h-64 w-full object-cover transition group-hover:scale-105"
            />
          </div>
          <div className="group overflow-hidden rounded-lg">
            <img
              src={FertilizerHandImage}
              alt="Fertilizer in hand"
              className="h-64 w-full object-cover transition group-hover:scale-105"
            />
          </div>
          <div className="group overflow-hidden rounded-lg">
            <img
              src={FertilizerSortingImage}
              alt="Fertilizer sorting"
              className="h-64 w-full object-cover transition group-hover:scale-105"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {productGroups.map((group, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{group.category}</h3>
              <ul className="mt-4 space-y-2">
                {group.products.map((product, idx) => (
                  <li key={idx} className="flex items-start text-slate-700 dark:text-slate-300">
                    <span className="mr-2 text-kalakaGold">•</span>
                    <span className="text-sm">{product}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                <strong>Packaging:</strong> {group.packaging}
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-block text-sm font-semibold text-kalakaPurple dark:text-kalakaGold hover:text-kalakaGold transition"
              >
                Enquire →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FertilizerPortfolioSection;
