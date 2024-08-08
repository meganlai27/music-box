import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home'
import Search from './pages/search'


// Routers to different pages of the App
const AppRouter: React.FC = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Router basename = "">
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;