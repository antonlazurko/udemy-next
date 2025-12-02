'use client';
import { useEffect, useState } from 'react';
import { getQuotes } from '@/entities/quote/model/get-quotes';
import { QuotesList } from '@/widgets/quotes-list';
import { PageTitle } from '@/shared';
import { fetchErrorNotification } from '@/shared';

export default function QuotesPage (){
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getRandomQuotes = async () => {
    try {
      const { data : quotes, ok, errors } = await getQuotes();
      if (!ok) {
        throw errors
      }
      setQuotes(quotes);
    } catch ({errors}) {
      fetchErrorNotification(errors)
    }
  };
    getRandomQuotes();
  }, []);

  return (
    <div className="flex flex-col flex-wrap justify-center">
      <PageTitle>
        Quotes Page with modal
      </PageTitle>
      <QuotesList quotes={quotes}/>
    </div>
  );
}