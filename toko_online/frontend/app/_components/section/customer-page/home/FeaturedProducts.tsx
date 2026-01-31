import Image from 'next/image';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Nike Air Max',
      price: 'IDR 2.500.000',
      image: '/images/bg-hero1.jpeg',
      badge: 'NEW',
      badgeColor: 'bg-blue-600',
    },
    {
      id: 2,
      name: 'Adidas Ultraboost',
      price: 'IDR 2.200.000',
      image: '/images/bg-hero2.png',
      badge: 'SALE',
      badgeColor: 'bg-red-600',
    },
    {
      id: 3,
      name: 'Puma RS-X',
      price: 'IDR 1.800.000',
      image: '/images/bg-hero3.png',
      badge: 'HOT',
      badgeColor: 'bg-orange-600',
    },
    {
      id: 4,
      name: 'New Balance 574',
      price: 'IDR 1.500.000',
      image: '/images/bg-hero1.jpeg',
      badge: '',
      badgeColor: '',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <a href="/products" className="text-sm font-semibold text-blue-600 hover:underline">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
            >
              {product.badge && (
                <span className={`absolute left-2 top-2 z-10 rounded px-2 py-1 text-xs font-bold text-white ${product.badgeColor}`}>
                  {product.badge}
                </span>
              )}
              
              <button className="absolute right-2 top-2 z-10 rounded-full bg-white p-2 opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                <svg
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-xl font-bold text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
