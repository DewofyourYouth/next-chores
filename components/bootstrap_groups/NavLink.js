import Link from "next/link";
import { Nav } from "react-bootstrap";

export function NavLink({ href, title }) {
  return (
    <Link href={href} passHref>
      <Nav.Link>{title}</Nav.Link>
    </Link>
  );
}
