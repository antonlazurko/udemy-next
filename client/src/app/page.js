import { QuotesList } from '@/widgets/quotes-list';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl mb-6 dark:text-white">
        Quotes frontend app
      </h1>
      <QuotesList/>
    </div>
  );
}
