import { ReactNode } from 'react';
import Footer from '../theme/Footer';


const Layout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

export default Layout;
