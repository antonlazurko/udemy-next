import { Button } from '@/shared';
import { getQuotes } from '@/entities/quote/model/get-quotes';
import { fetchErrorNotification } from '@/shared';

export const GetRandomButton = ({ setQuotes }) => {
  const onRandomButtonClick = async() => {
    try {
      const { data : quotes, ok, errors } = await getQuotes();
      if (!ok) {
        throw errors
      }
      setQuotes(quotes);
    } catch ({errors}) {
      console.log(errors);

      fetchErrorNotification(errors)
    }
  }
  return (<Button
    className="w-xs mx-auto"
    onClick={ onRandomButtonClick }>
    Get Random Quotes
  </Button>)
};