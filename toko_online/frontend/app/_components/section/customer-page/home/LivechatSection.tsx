const LivechatSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 text-white">
      <div className="container mx-auto px-4 text-center md:px-8 lg:px-16">
        <h2 className="mb-4 text-4xl font-bold">Not sure about your size?</h2>
        <p className="mb-8 text-lg text-gray-300">
          Our customer support team is here to help you find the perfect fit. Chat with us now!
        </p>
        <button className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-700 mx-auto">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Start Live Chat
        </button>
      </div>
    </section>
  );
};

export default LivechatSection;
