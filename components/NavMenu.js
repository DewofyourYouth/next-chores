import Link from "next/link";
import { Container, Navbar, Nav, Image, Button } from "react-bootstrap";
import { useSession, signIn, signOut } from "next-auth/react";

export default function NavMenu() {
  const { data: session } = useSession();
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
        {session ? (
          <Button roundedCircle>
            <Image src={session.user.image} roundedCircle width="50" />
          </Button>
        ) : (
          <Button onClick={signIn}>Sign In</Button>
        )}
      </Container>
    </Navbar>
  );
}
