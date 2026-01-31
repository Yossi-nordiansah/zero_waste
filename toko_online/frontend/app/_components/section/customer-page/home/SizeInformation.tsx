import Image from 'next/image';

const SizeInformation = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Your size, every time.
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              Find your perfect fit with our comprehensive size guide. We ensure you get the right size for maximum comfort and style.
            </p>
            <button className="rounded-full bg-black px-8 py-3 font-semibold text-white transition-all hover:bg-gray-800">
              Find My Size
            </button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-blue-100 shadow-lg">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 flex justify-center gap-4">
                    <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-white shadow-md">
                      <span className="text-3xl font-bold text-blue-600">8</span>
                    </div>
                    <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-blue-600 shadow-md">
                      <span className="text-3xl font-bold text-white">9</span>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">US Size</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeInformation;
