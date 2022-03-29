import { Col, Container, Row } from "react-bootstrap";

import { AddKid } from "../components/forms/AddKid";
import { AddChore } from "../components/forms/AddChore";

export default function Settings() {
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <h1 className="pt-4">Settings</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col lg>
            <AddKid />
          </Col>
          <Col lg>
            <AddChore />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
