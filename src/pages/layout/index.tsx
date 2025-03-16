import { Outlet } from 'react-router-dom';
import Header from '../../widgets/header';
import Footer from '../../widgets/footer';
import TempStateManager from '../../shared/ui/temp-state-manager/temp-state-manager';

const Layout = () => {
  return (
    <>
      <Header />
      <TempStateManager />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
