import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/index';
import Home from '../pages/home'
import About from '../pages/about';

function AppRouters() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Layout>
  );
}

export default AppRouters;