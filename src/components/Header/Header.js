import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
	const handleLogin = () => {
		// redirect to sso
		window.location.href = `${process.env.REACT_APP_BACKEND_SSO}?serviceURL=${process.env.REACT_APP_SERIVICE_URL}`;
	}
	return (
		<>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<NavLink to="/" className="nav-link">
								Home
							</NavLink>
							<NavLink to="/about" className="nav-link">
								About
							</NavLink>
						</Nav>
						<Nav>
							<NavDropdown
								title="Settings"
								id="basic-nav-dropdown"
							>
								<NavDropdown.Item onClick={() => handleLogin()}>
									Login
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
