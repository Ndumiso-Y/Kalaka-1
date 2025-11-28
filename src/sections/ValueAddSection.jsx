import React from 'react';

const features = [
  {
    title: 'Security of Supply',
    description: 'Access to sizeable offtakes from leading global producers with multi-year supply agreements.',
    initial: 'S',
  },
  {
    title: 'Flexible Packaging & Logistics',
    description: 'Bulk, break bulk, and containerized options tailored to your distribution model.',
    initial: 'F',
  },
  {
    title: 'African Market Insight',
    description: 'Deep regional relationships and understanding of local regulatory and operational requirements.',
    initial: 'A',
  },
  {
    title: 'Experienced Trading & Risk Management',
    description: 'Professional team with decades of commodities trading and price hedging expertise.',
    initial: 'E',
  },
];

function ValueAddSection() {
  return (
    <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-kalakaGold">
            WHY KALAKA?
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-slate-900 dark:text-slate-100">
            Security of Supply & African Expertise
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950/80 p-6 backdrop-blur-sm transition hover:border-kalakaGold/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-kalakaGold/20 text-kalakaGold">
                <span className="text-xl font-bold">{feature.initial}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-slate-100">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueAddSection;
