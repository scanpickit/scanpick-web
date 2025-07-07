const LogoCarousel = () => {
  const logos = [
    { name: 'Company 1', icon: '🏢' },
    { name: 'Company 2', icon: '🔧' },
    { name: 'Company 3', icon: '⚙️' },
    { name: 'Company 4', icon: '🏭' },
    { name: 'Company 5', icon: '🔬' },
    { name: 'Company 6', icon: '💼' },
    { name: 'Company 7', icon: '🚀' },
    { name: 'Company 8', icon: '⭐' },
  ];

  // Duplicate the array for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-scanpick-black py-16 border-t border-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-scanpick-white/60 text-lg font-medium">
            Over 50+ business trust us
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-scanpick-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-scanpick-black to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="flex animate-scroll space-x-16">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[120px] h-16 text-scanpick-white/40 hover:text-scanpick-white transition-colors duration-300"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{logo.icon}</span>
                  <span className="text-sm font-medium whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;