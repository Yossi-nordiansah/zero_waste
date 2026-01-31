const DiscountSection = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4 text-center md:px-8 lg:px-16">
        <h2 className="mb-4 text-4xl font-bold text-white">
          Student Deals / Discounts
        </h2>
        <p className="mb-6 text-lg text-blue-100">
          Get exclusive discounts on your favorite brands. Limited time offer!
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-full px-6 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white sm:w-80"
          />
          <button className="w-full rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-all hover:bg-gray-100 sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
