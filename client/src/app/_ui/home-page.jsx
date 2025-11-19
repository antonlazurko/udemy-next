'use client';
import { useEffect, useState } from 'react';
import { fetchQuotes } from '@/entities/quote/model/fetch-quotes';
import { QuotesList } from '@/widgets/quotes-list';
import { GetRandomButton } from '@/features/get-random-quote/ui/get-random-button';
import { PageTitle } from '@/shared';

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
      <PageTitle>
        Quotes frontend app
      </PageTitle>
      <GetRandomButton setQuotes={setQuotes}/>
      <QuotesList quotes={quotes}/>
    </div>
  );
}