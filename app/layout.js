import { Inter,Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Header from '@/components/Header'
import  { Metadata } from "next";

const inter = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "Your Page Title",
  description: "A brief description of your page for SEO",
  keywords: ["nextjs", "seo", "your", "keywords"],
  openGraph: {
    title: "Your Open Graph Title",
    description: "Your Open Graph Description",
    url: "https://example.com/page",
    images: [
      {
        url: "https://example.com/your-image.jpg",
        width: 800,
        height: 600,
        alt: "Image Description",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Your Twitter Title",
    description: "Your Twitter Description",
    images: ["https://example.com/your-image.jpg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">

      <body className={inter.className}>
      <Header/>
        {children}
    </body>  
    </html>
    </ClerkProvider>
  );
}
