import type { Metadata } from "next";

import "./globals.css";





export const metadata: Metadata = {
  title: "Elena Vance | Lawyer",
  description: "Exclusive corporate governance, mergers & acquisitions, and private legal counsel for high-net-worth clients and enterprises. Schedule a confidential executive consultation.",
  icons:{
    icon: '/favicon.ico',
    apple: '/favicon.ico'
  },
  other: {
    'theme-color': 'rgb(68, 0, 0)',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      
    >
      <head>
        <meta name="theme-color" content="#3A0101" />

        <link rel="preload" href="/images/bg.webp" as="image" type="image/webp" />
        <link rel="preload" href="/images/appointment-background" as="image" type="image/webp" />
        <link rel="preload" href="/images/worldmap.webp" as="image" type="image/webp" /> 


        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap" rel="stylesheet" />   
        
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
