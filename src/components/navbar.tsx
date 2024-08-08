import '../style/navbar.css'
// import { Link } from 'react-router-dom';
import logo from "../assets/MusicBoxLogo.png";

const Navbar = () => {
	return (
		<>
			<nav className = "navbar">
				<img src = {logo} className = "logo"/>
				<h4>Home</h4>
				<h4>Search</h4>
				<h4>Profile</h4>
			</nav>
			{/* <Nav>
				<NavMenu>
                    <NavLink to="/">
						Home
                    </NavLink>
					<NavLink to="/search">
						Search
					</NavLink>
					<NavLink to="/contact">
						Contact Us
					</NavLink>
					<NavLink to="/sign-in">
						Log In
					</NavLink>
				</NavMenu>
			</Nav> */}
		</>
	);
};

export default Navbar;