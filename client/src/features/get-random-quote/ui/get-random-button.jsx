import { Button } from '@/shared';
import { fetchQuotes } from '@/entities/quote/model/fetch-quotes';

export const GetRandomButton = ({ setQuotes }) => {
  const onRandomButtonClick = async() => {
    try {
      const quotes = await fetchQuotes();
      setQuotes(quotes);
    } catch (error) {
      console.error(error);
    }
  }
  return (<Button
    className="w-xs mx-auto"
    onClick={ onRandomButtonClick }>
    Get Random Quotes
  </Button>)
};