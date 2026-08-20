import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Data Analyst Portfolio | Hoang The Analyst',
  description:
    'Portfolio of Hoang The Analyst featuring 7 data projects across SQL, Python, Tableau, and Power BI.',
  icons: {
    icon: '/Images/Logo HTA.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          precedence="default"
        />
      </head>
      <body className="bg-white text-gray-800 antialiased">{children}</body>
    </html>
  );
}