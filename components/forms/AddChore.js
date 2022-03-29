import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

import { FormGroup } from "../bootstrap_groups/FormGroup";

export const AddChore = () => {
  const [choreTitle, setChoreTitle] = useState("");
  const [points, setPoints] = useState(1);
  return (
    <Form>
      <Container>
        <Row>
          <Col>
            <h3 className="pt-4">Add a chore</h3>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup
              initialState={choreTitle}
              changeFn={(e) => setChoreTitle(e)}
              label="Chore Title"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Chore Type</Form.Label>
              <Form.Select>
                <option value="daily">Daily</option>
                <option value="alternating">Alternating</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <FormGroup
              initialState={points}
              changeFn={(e) => setPoints(e)}
              label="Points"
              type="number"
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
