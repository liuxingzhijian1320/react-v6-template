import * as React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Home from '../views/Home';
import Login from '../views/Login';

const Router = () => {
  const isLogin = localStorage.getItem('react-admin-token') || '';
  let location = useLocation();
  let navigate = useNavigate();

  React.useEffect(() => {
    if (location.pathname !== '/login' && !isLogin) {
      navigate('../login', { replace: true });
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default Router;
