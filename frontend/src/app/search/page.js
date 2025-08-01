// app/search/page.js
import { Suspense } from 'react';
import SearchComponent from './searchComponent';

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>} >
      <SearchComponent />
    </Suspense>
  );
}
