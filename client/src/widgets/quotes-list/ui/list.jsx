'use client';

import { useEffect, useState } from 'react';
import { QuotesListItem } from './list-item';
import { GetRandomButton } from '@/features/get-random-quote/ui/get-random-button';
import { fetchQuotes } from '@/entities/quote/model/fetch-quotes';

export const QuotesList =() => {
  const [quotes, setQuotes] = useState([]);
  const getQuotes = async () => {
    const quotes = await fetchQuotes();
    setQuotes(quotes);
  }
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      <GetRandomButton getQuotes={getQuotes} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {quotes.map(quote => <QuotesListItem key={quote.id} {...quote}/>)}
    </div>
    </div>
  )
}