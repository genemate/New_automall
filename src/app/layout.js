import { Montserrat } from "next/font/google";
import "./globals.css";

<link
  rel="icon"
  href="/app/favicon.ico>"
  type="image/<generated>"
  sizes="<generated>"
/>

const montserrat = Montserrat({ 
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  display: "swap",
  fallback: ['Montserrat', 'sans-serif'], 
});

export const metadata = {
  title: "AUTOMALL",
  description: "Multibrend avtosalon",
};

//search context provider
import { SearchContextProvider } from "./context/search";


export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
