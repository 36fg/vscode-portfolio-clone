import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/index';
import Home from '../pages/home'
import About from '../pages/about';
import Projects from '../pages/projects';
import Contact from '../pages/contact';

function AppRouters() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default AppRouters;