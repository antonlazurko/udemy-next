'use client';

import { SearchFilters } from './_ui/search-filters';
import { QuotesList } from '@/widgets/quotes-list';
import { useState } from 'react';
import { PageTitle } from '@/shared';

export default function SearchPage() {
  const [quotes, setQuotes] = useState([]);

  return <div className="mt-6">
    <PageTitle className="text-center text-3xl mb-6 dark:text-white">
      Search Page
    </PageTitle>
    <SearchFilters setQuotes={setQuotes}/>
    <QuotesList quotes={quotes}/>
  </div>
}