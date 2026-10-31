import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
