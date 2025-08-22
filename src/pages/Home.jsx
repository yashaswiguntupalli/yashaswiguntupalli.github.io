import React from 'react';

export default function Home() {
  return (
    <div className="text-center px-4 py-12 bg-gray-50">
      <img
        src="https://via.placeholder.com/150"
        alt="Your portrait"
        className="mx-auto w-32 h-32 rounded-full border-4 border-black shadow-md"
      />
      <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Hey, I'm <span className="text-green-600 font-bold">YG</span>.
        Check out what I'm working on.
      </h1>
    </div>
  );
}
