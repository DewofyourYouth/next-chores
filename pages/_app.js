import { SessionProvider } from "next-auth/react";
import { SSRProvider } from "react-bootstrap";

import { NavMenu } from "../components/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";

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
