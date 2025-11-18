import { Button } from '@/shared';

export const GetRandomButton = ({ getQuotes }) => (
  <Button
    onClick={ getQuotes }>
    Get Random Quotes
  </Button>
);