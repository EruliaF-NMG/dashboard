import { BrowserRouter } from 'react-router-dom';

//import routers
import AuthRoutes from '../components/modules/auth/Auth.routes';
import DashboardRoutes from '../components/modules/dashboard/Dashboard.routes';

const Routes = () => {
    return (
      <BrowserRouter>
        <AuthRoutes/>
        <DashboardRoutes/>
      </BrowserRouter>
    );
  };
  
export default Routes;