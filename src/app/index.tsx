import { AppRoutes } from './routing/app-routes';
import { PageLayout } from '../shared/ui/page-layout/page-layout';

function App() {
  return <PageLayout content={<AppRoutes />} />;
}

export default App;
