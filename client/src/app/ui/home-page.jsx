'use client';
import { useEffect, useState } from 'react';
import { fetchQuotes } from '@/entities/quote/model/fetch-quotes';
import { QuotesList } from '@/widgets/quotes-list';
import { GetRandomButton } from '@/features/get-random-quote/ui/get-random-button';

export const HomePage = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const quotes = await fetchQuotes();
        setQuotes(quotes);
      } catch (error) {
        console.error(error);
      }
    };
    getQuotes();
  }, []);

  return (
    <div className="flex flex-col flex-wrap justify-center">
      <h1 className="text-center text-3xl mb-6 dark:text-white">
        Quotes frontend app
      </h1>
      <GetRandomButton setQuotes={setQuotes}/>
      <QuotesList quotes={quotes}/>
    </div>
  );
}