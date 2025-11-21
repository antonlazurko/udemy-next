import { HomePage } from './_ui/home-page';

export const metadata = {
  title: "Quotes App",
  description: "Quotes Dashboard with random",
  openGraph: {
    title: "Quotes App",
    description: "Quotes Dashboard with random",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quotes App",
    description: "Quotes Dashboard with random",
  },
  icons: {
    icon: "/favicon.ico"
  },
};
export default function Home() {
  return (<HomePage/>);
}
