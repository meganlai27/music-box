import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/search" element={<Singapore />} />
        <Route path="/sign-in" element={<HongKong />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;