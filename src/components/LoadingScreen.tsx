
import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-barber-dark z-50 flex flex-col items-center justify-center">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-barber-secondary animate-pulse">
          FAMA
        </h1>
        <p className="text-white text-lg mt-2">Barber Shop & Beauty Salon</p>
      </div>
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-barber-secondary animate-[slide-in-right_2s_ease-in-out]"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
