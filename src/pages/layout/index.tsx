import { PageLayout } from 'shared/ui/page-layout/page-layout';
import { Header } from 'stories/Header';
import Footer from 'widgets/footer';

const Layout = () => {
  return (
    <>
      <Header />
      <PageLayout />
      <Footer />
    </>
  );
};

export default Layout;
