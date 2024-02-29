import { Outlet } from 'react-router-dom';
import Header from './components/common/Header/Header';

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default AppLayout;
