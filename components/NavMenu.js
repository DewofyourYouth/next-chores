import Link from "next/link";
import {
  Container,
  Navbar,
  Nav,
  Image,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { useSession, signIn, signOut } from "next-auth/react";
import { NavLink } from "../components/NavLink";

export default function NavMenu() {
  const { data: session } = useSession();
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
        {session ? (
          <NavDropdown
            title={<Image src={session.user.image} roundedCircle width="50" />}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item>Settings</NavDropdown.Item>
            <NavDropdown.Item>Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={signOut}>Sign Out</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <Button onClick={signIn}>Sign In</Button>
        )}
      </Container>
    </Navbar>
  );
}
