import Link from "next/link";
import {
  Container,
  Navbar,
  Nav,
  Image,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "../components/NavLink";
import { UserNavDropDown } from "../components/UserNavDropDown";

export default function NavMenu() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Chores App</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <NavLink href="/" title="Home" />
          <NavLink href="/chores" title="Chores" />
        </Nav>
        <UserNavDropDown />
      </Container>
    </Navbar>
  );
}
