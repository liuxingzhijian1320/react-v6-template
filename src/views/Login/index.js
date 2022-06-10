import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('react-admin-token');
  }, []);

  const loginHandler = () => {
    localStorage.setItem('react-admin-token', 123);
    navigate('../', { replace: true });
  };

  return (
    <h1>
      <Button onClick={loginHandler}>点击登录</Button>
    </h1>
  );
}
export default Login;
