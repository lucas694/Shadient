import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from './components/header';
import {Footer} from './components/footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Agrandir:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}> 
        <Header />
        {children}
        <Footer/>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
