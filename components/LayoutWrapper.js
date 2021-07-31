import Footer from './Footer';
import Header from './Header';

const LayoutWrapper = ({ children }) => (
  <div className="container mx-auto w-full xl:w-2/3">
    <Header />
    <main className="px-8">{children}</main>
    <Footer />
  </div>
);

export default LayoutWrapper;
