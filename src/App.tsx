import { Router, Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import LoginForm from './pages/login';
import Search from './pages/search';
import ReviewForm from './pages/reviewform'
// import Login from './pages/login';
// import Register from './pages/register';


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element = {<Home />} />
            <Route path="/login" element = {<LoginForm/>} />
            {/* <Route path="/signup" element = {<Register/>} /> */}
          </Routes>
        </BrowserRouter>
      </div>
      
      <div>
        {/* <LoginForm/> */}
        {/* <Home/> */}
        <Search/>
        {/* <ReviewForm/> */}
      </div>
    </>
  )
}

export default App
