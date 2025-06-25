import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/index';
import Home from '../pages/home/index'

function AppRouters() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default AppRouters;