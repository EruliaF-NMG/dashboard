import { Routes, Route } from 'react-router-dom';

import Login from './login/Login.page';

const AuthRoutes = () => {
    return (
        <Routes>  
             <Route exact path='/' element={<Login/>}/>
        </Routes>  
    );
  };
  
  export default AuthRoutes;