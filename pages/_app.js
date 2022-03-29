import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "../components/NavMenu";
import { SessionProvider } from "next-auth/react";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SSRProvider>
      <SessionProvider session={session}>
        <NavMenu />
        <Component {...pageProps} />
      </SessionProvider>
    </SSRProvider>
  );
}

export default MyApp;
