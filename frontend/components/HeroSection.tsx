import { FC } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const HeroSection: FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h px-6 py-12 bg-gray-50"
      style={{
        backgroundImage: 'url(/Designer2.jpeg)', // Replace with your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background Blur Shapes */}
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        {/* Optional blurred shape */}
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        {/* Optional blurred shape */}
      </div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Diamond Cosmetics
        </h1>
        <p className="text-lg mb-8">
          Discover our premium beauty products and enjoy exclusive offers.
        </p>
        <a
          href="#shop-now"
          className="inline-block rounded-full bg-violet-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-violet-700"
        >
          Shop Now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      {/* Close Button */}
      <div className="absolute top-4 right-4">
        <button type="button" className="text-white">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
