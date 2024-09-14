import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartProvider } from '../context/CartContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <CartProvider>
      <Navbar />
      <main className="container mx-auto p-4 md:p-6 lg:p-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </CartProvider>
      
    </>
  );
}
