// import {Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import LoginForm from './pages/login';
import Search from './pages/search';
// import Login from './pages/login';
// import Register from './pages/register';


function App() {

  return (
    // <>
    //   <Routes>
    //     <Route path="/" element = {<Home />} />
    //     {/* <Route path="/login" element = {<Login/>} /> */}
    //     {/* <Route path="/signup" element = {<Register/>} /> */}
    //   </Routes>
    // </>
      
      <div>
        {/* <LoginForm/> */}
        {/* <Home/> */}
        <Search/>
      {/* <h1>Display your Spotify profile data</h1>

<section id="profile">
<h2>Currently Playing: <span id="displayName"></span></h2> */}
{/* <span id="avatar"></span> */}
{/* <ul>
    <li>User ID: <span id="id"></span></li>
    <li>Email: <span id="email"></span></li>
    <li>Spotify URI: <a id="uri" href="#"></a></li>
    <li>Link: <a id="url" href="#"></a></li>
    <li>Profile Image: <span id="imgUrl"></span></li>
</ul> */}
{/* </section> */}
    </div>
  )
}

export default App
