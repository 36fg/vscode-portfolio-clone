import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/index'

function AppRouters() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRouters;