import * as React from 'react';
import { Button } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
function Detail() {
  let navigate = useNavigate();
  let { id } = useParams('id');

  const back = () => {
    navigate(-1);
  };

  return (
    <h1>
      产品id：{id}
      <br />
      <Button onClick={back}>返回</Button>
    </h1>
  );
}
export default Detail;
