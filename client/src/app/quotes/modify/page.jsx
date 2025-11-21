import { ModifyQuotePageComponent } from "./ui/modify-quote-page";

export const metadata = {
  title: "Modify Quote | Quotes App",
  description: "Form to Modify a new inspirational quote",
  openGraph: {
    title: "Modify Quote | Quotes App",
    description: "Form to Modify a new inspirational quote",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modify Quote | Quotes App",
    description: "Form to Modify a new inspirational quote",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default async function ModifyQuotePage() {
  return <ModifyQuotePageComponent/>
}