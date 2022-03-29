import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { format } from "date-fns";
import { FormGroup } from "../bootstrap_groups/FormGroup";

export const AddKid = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState(format(new Date(), "yyyy-MM-dd"));

  return (
    <Form>
      <Container>
        <Row>
          <Col>
            <h3 className="pt-4">Add a kid</h3>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup
              initialState={firstName}
              changeFn={(e) => setFirstName(e)}
              label="First Name"
            />
          </Col>
          <Col>
            <FormGroup
              initialState={lastName}
              changeFn={(e) => setLastName(e)}
              label="Last Name"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup
              initialState={birthday}
              changeFn={(e) => setBirthday(e)}
              label="Birthday"
              type="date"
            />
          </Col>
        </Row>
        <Row>
          <Col align="center">
            <Button className="mt-4" variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};
