import * as React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import '../App.scss';
import About from '../views/About';
import Index from '../views/Index';
import Detail from '../views/Detail';
const NotFound = React.lazy(() => import('./NotFound'));

// 自定义重定向
// function Redirect({ to }) {
//   let navigate = useNavigate();
//   React.useEffect(() => {
//     navigate(to);
//   });
//   return null;
// }

function Home() {
  return (
    <div className="Home">
      <ul className="tabbar">
        <li className="tabbar-item">
          <Link to="/">首页</Link>
        </li>
        <li className="tabbar-item">
          <Link to="/about">关于</Link>
        </li>
      </ul>

      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          {/* not found */}
          <Route path="/404" element={<NotFound />} />
          {/* 重定向 */}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </div>
  );
}
export default Home;
