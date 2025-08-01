'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [location, setLocation] = useState('');
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?location=${location}&profession=${query}`);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-0 mt-6 w-full px-4 sm:px-0">
      {/* Location Input */}
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location please"
        className="w-40 sm:w-52 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-white placeholder-gray-400"
      />

      {/* Specialty Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter the Profession of Doctor"
        className="w-64 sm:w-96 px-4 py-3 border-y border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-white placeholder-gray-400"
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6  py-3 rounded-r-md text-sm"
      >
        Search
      </button>
    </div>
  );
}
