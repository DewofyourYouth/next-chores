import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "../components/NavMenu";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NavMenu />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
