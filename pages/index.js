import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import { useSession, signIn } from "next-auth/react";

import { AddKid } from "../components/forms/AddKid";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    const { user } = session;
    return (
      <>
        <Head>
          <title>Chores App</title>
          <meta
            name="description"
            content="An app for keeping track of family chores."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Container>
            <Row>
              <Col>
                <h1 className="pt-4">Welcome {user.name}!</h1>
              </Col>
            </Row>
            <Row>
              <AddKid />
            </Row>
          </Container>
        </main>
      </>
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
