import { Link } from "react-router-dom";

import classes from "./MainNavigaton.module.css";

import { NavDropdown, Item, Container, Navbar, Nav } from "react-bootstrap";



function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Client Service</Link>
          </li>
          <li>
            <Link to="/new-meetup">FAQ</Link>
          </li>
          <li>
            <Link to="/favorites">About</Link>
          </li>
          <li>

          
            <Container fluid>
                
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                    <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Dropdown"
                    menuVariant="dark"
                    >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>

          {/* <NavDropdown className={classes.NavDropdown} title="Lang">
            <NavDropdown.Item href="#action/3.1">Eng</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Malay</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Mandarin</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Thai</NavDropdown.Item>
          </NavDropdown> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
