import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const Header = () => {
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
							{/* <Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/about">About</Nav.Link> */}
						</Nav>
						<Nav>
							<NavDropdown
								title="Settings"
								id="basic-nav-dropdown"
							>
								<NavDropdown.Item href="#action/3.1">
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
