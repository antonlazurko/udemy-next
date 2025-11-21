import { Button } from '@/shared';
import { getQuotes } from '@/entities/quote/model/get-quotes';

export const GetRandomButton = ({ setQuotes }) => {
  const onRandomButtonClick = async() => {
    const quotes = await getQuotes();
    setQuotes(quotes);
  }
  return (<Button
    className="w-xs mx-auto"
    onClick={ onRandomButtonClick }>
    Get Random Quotes
  </Button>)
};