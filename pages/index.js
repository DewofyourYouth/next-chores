import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    const { user } = session;
    return (
      <Container>
        <Head>
          <title>Chores App</title>
          <meta
            name="description"
            content="An app for keeping track of family chores."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="pt-4">Welcome {user.name}</h1>
        </main>
      </Container>
    );
  }
  return (
    <Container>
      <main>
        Not signed in <br />
        <button onClick={signIn}>Sign In</button>
      </main>
    </Container>
  );
}
