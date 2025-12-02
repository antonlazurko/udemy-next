'use client';

import { useState, Suspense } from 'react';
import { SearchFilters } from './_ui/search-filters';
import { QuotesList } from '@/widgets/quotes-list';
import { PageTitle } from '@/shared';

export default function SearchPage() {
  const [quotes, setQuotes] = useState([]);

  return <div className="mt-6">
    <PageTitle className="text-center text-3xl mb-6 dark:text-white">
      Search Page
    </PageTitle>
    <Suspense fallback={<div>Loading...</div>}>
      <SearchFilters setQuotes={setQuotes} />
    </Suspense>
    <QuotesList quotes={quotes}/>
  </div>
}