'use client';
import { useEffect, useState } from 'react';
import { getQuotes } from '@/entities/quote/model/get-quotes';
import { QuotesList } from '@/widgets/quotes-list';
import { GetRandomButton } from '@/features/get-random-quote/ui/get-random-button';
import { PageTitle } from '@/shared';

export const HomePage = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getRandomQuotes = async () => {
      const quotes = await getQuotes();
      setQuotes(quotes);
    };
    getRandomQuotes();
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