import React from 'react';
import ShipmentImage from '../assets/images/Shipment.png';
import JumboBagsImage from '../assets/images/JumboBags.png';
import TruckImage from '../assets/images/TruckDroppingFertilizer.png';

const supplySteps = [
  {
    step: 1,
    title: 'Manufacturing Partners',
    description: 'Direct relationships with leading fertilizer producers globally',
    image: null,
  },
  {
    step: 2,
    title: 'Shipping & Port Handling',
    description: 'Bulk vessel and container movements to regional ports',
    image: ShipmentImage,
  },
  {
    step: 3,
    title: 'Bulk & Jumbo Storage',
    description: 'Warehousing and bagging facilities at key distribution hubs',
    image: JumboBagsImage,
  },
  {
    step: 4,
    title: 'Regional Distribution',
    description: 'Road and rail delivery to customer sites across Africa',
    image: TruckImage,
  },
  {
    step: 5,
    title: 'Customer Offtake & Support',
    description: 'Ongoing technical support and supply optimization',
    image: null,
  },
];

function SupplyChainSection() {
  return (
    <section className="border-b border-slate-800 bg-slate-950 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-kalakaGold">
            SUPPLY CHAIN
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Optimised Supply from Plant to Port to Farm
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Our integrated logistics network ensures timely, cost-effective delivery across
            Africa's most challenging routes.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {supplySteps.map((item, index) => (
            <div
              key={index}
              className="grid gap-6 lg:grid-cols-12 items-center"
            >
              <div className="lg:col-span-1 flex justify-center lg:justify-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-kalakaGold text-lg font-bold text-slate-900">
                  {item.step}
                </div>
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
                <p className="mt-2 text-slate-400">{item.description}</p>
              </div>
              <div className="lg:col-span-6">
                {item.image && (
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-kalakaGold/30 bg-kalakaPurple/20 p-6 text-center">
          <p className="text-sm font-semibold text-kalakaGold">CURRENT EXPORT ROUTES</p>
          <p className="mt-2 text-slate-300">
            Active deliveries into Zambia, Mozambique, and expanding across Southern and East Africa
          </p>
        </div>
      </div>
    </section>
  );
}

export default SupplyChainSection;
