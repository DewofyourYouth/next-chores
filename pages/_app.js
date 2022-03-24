import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "../components/NavMenu";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavMenu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
