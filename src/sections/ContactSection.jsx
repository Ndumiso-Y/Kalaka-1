import React, { useState } from 'react';

const products = [
  'Urea 46%',
  'Ammonium Sulphate',
  'CAN',
  'DAP',
  'TSP',
  'GSSP',
  'NPK Blends',
  'SOP',
  'MOP',
];

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    country: '',
    region: '',
    products: [],
    volume: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        products: checked
          ? [...prev.products, value]
          : prev.products.filter((p) => p !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl text-slate-900 dark:text-slate-100">Request a Supply Proposal</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              We work with blenders, wholesalers, traders, and distributors across Africa to
              deliver reliable fertilizer supply solutions.
            </p>
            <div className="mt-8 space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                <strong className="text-kalakaGold">Email:</strong>{' '}
                <span className="text-slate-600 dark:text-slate-400">info@kalakasouth.com</span>
              </p>
              <p>
                <strong className="text-kalakaGold">Phone:</strong>{' '}
                <span className="text-slate-600 dark:text-slate-400">+27 (0) 11 123 4567</span>
              </p>
              <p>
                <strong className="text-kalakaGold">Location:</strong>{' '}
                <span className="text-slate-600 dark:text-slate-400">Johannesburg, South Africa</span>
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-kalakaGold focus:outline-none focus:ring-1 focus:ring-kalakaGold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-kalakaGold focus:outline-none focus:ring-1 focus:ring-kalakaGold"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-kalakaGold focus:outline-none focus:ring-1 focus:ring-kalakaGold"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-kalakaGold focus:outline-none focus:ring-1 focus:ring-kalakaGold"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-kalakaGold focus:outline-none focus:ring-1 focus:ring-kalakaGold"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-kalakaGold focus:outline-none focus:ring-1 focus:ring-kalakaGold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Product Interest
                </label>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {products.map((product) => (
                    <label key={product} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <input
                        type="checkbox"
                        name="products"
                        value={product}
                        checked={formData.products.includes(product)}
                        onChange={handleChange}
                        className="mr-2 rounded border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-kalakaGold focus:ring-kalakaGold"
                      />
                      {product}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="volume" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Approximate Annual Volume
                </label>
                <select
                  id="volume"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-kalakaGold focus:outline-none focus:ring-1 focus:ring-kalakaGold"
                >
                  <option value="">Select range</option>
                  <option value="<1000">Less than 1,000 tons</option>
                  <option value="1000-5000">1,000 - 5,000 tons</option>
                  <option value="5000-10000">5,000 - 10,000 tons</option>
                  <option value="10000-30000">10,000 - 30,000 tons</option>
                  <option value=">30000">More than 30,000 tons</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-4 py-2 text-slate-900 dark:text-slate-100 focus:border-kalakaGold focus:outline-none focus:ring-1 focus:ring-kalakaGold"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-kalakaGold px-6 py-3 font-semibold text-slate-900 transition hover:bg-kalakaGold/90"
              >
                Submit Request
              </button>

              {submitted && (
                <div className="rounded-md border border-green-500 bg-green-500/10 p-4 text-center text-sm text-green-400">
                  Thank you! Your request has been submitted. We'll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
