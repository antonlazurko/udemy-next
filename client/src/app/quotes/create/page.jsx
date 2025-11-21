import { CreateQuotePageComponent } from "./ui/create-quote-page";

export const metadata = {
  title: "Create Quote | Quotes App",
  description: "Form to create a new inspirational quote",
  openGraph: {
    title: "Create Quote | Quotes App",
    description: "Form to create a new inspirational quote",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Quote | Quotes App",
    description: "Form to create a new inspirational quote",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function CreateQuotePage() {
  return <CreateQuotePageComponent/>
}