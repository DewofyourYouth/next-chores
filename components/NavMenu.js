import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavMenu() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Chores App</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Link href="/chores" passHref>
            <Nav.Link>Chores</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
