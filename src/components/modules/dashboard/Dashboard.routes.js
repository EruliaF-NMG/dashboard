import { Routes, Route } from 'react-router-dom';

import Home from './home/Home.page';


const DashboardRoutes = () => {
    return (
        <Routes>  
             <Route exact path='/dashboard' element={<Home />}/>
        </Routes>  
    );
};
  
export default DashboardRoutes;