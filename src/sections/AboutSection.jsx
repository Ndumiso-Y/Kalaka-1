import React from 'react';

const businessArms = [
  {
    title: 'Cargo Trading',
    description: 'Physical commodities trading with African market focus',
  },
  {
    title: 'Maritime Supplies',
    description: 'Vessel provisioning and marine logistics services',
  },
  {
    title: 'Downstream Distribution',
    description: 'Regional warehousing and last-mile delivery solutions',
  },
  {
    title: 'Fertilizers',
    description: 'Full portfolio of nitrogen, phosphate, and potash products',
  },
  {
    title: 'Mining Services',
    description: 'Contract mining, equipment supply, and site operations',
  },
];

function AboutSection() {
  return (
    <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-kalakaGold">
                ABOUT KALAKA
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-slate-900 dark:text-slate-100">
                A Diversified Commodities & Mining Group
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Kalaka South Mining is a dynamic commodities trading and mining services
                group with deep roots across Africa. Our integrated operations span physical
                trading, fertilizer supply, maritime logistics, and contract mining—delivering
                reliable supply solutions to wholesale, retail, and industrial customers.
              </p>
              <p className="mt-4 leading-relaxed text-slate-500 dark:text-slate-400">
                With extensive regional relationships and proven logistics expertise, we bridge
                global supply sources with African demand, ensuring security of supply and
                competitive pricing across our portfolio.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {businessArms.map((arm, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-950/50 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-kalakaGold/10 text-kalakaGold">
                    <span className="text-lg font-bold">{arm.title.charAt(0)}</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900 dark:text-slate-100">{arm.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{arm.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
