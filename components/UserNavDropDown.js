import { useSession, signIn, signOut } from "next-auth/react";
import { NavDropdown, Image } from "react-bootstrap";

export const UserNavDropDown = () => {
  const { data: session } = useSession();
  return (
    <NavDropdown
      title={
        <Image
          src={session ? session.user.image : "/no-user-image-icon-0.jpg"}
          roundedCircle
          width="50"
        />
      }
      id="navbarScrollingDropdown"
    >
      {session && (
        <>
          <NavDropdown.Item>Settings</NavDropdown.Item>
          <NavDropdown.Item>Profile</NavDropdown.Item>
          <NavDropdown.Divider />
        </>
      )}
      <NavDropdown.Item
        onClick={() => {
          session ? signOut() : signIn();
        }}
      >
        {session ? "Sign Out" : "Sign In"}
      </NavDropdown.Item>
    </NavDropdown>
  );
};
