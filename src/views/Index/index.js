import * as React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Index() {
  let navigate = useNavigate();

  const logout = () => {
    navigate('../login', { replace: true });
  };

  const GoDetail = (id) => {
    navigate(`../detail/${id}`);
  };

  return (
    <h1>
      index
      <br />
      <Button type="danger" onClick={logout}>
        退出
      </Button>
      <br />
      <Button type="primary" onClick={() => GoDetail(1)}>
        产品ID=1的商品详情页面
      </Button>
    </h1>
  );
}
export default Index;
