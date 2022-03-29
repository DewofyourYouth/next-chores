import { Form } from "react-bootstrap";

export const FormGroup = ({ initialState, changeFn, label, type = "text" }) => {
  const handleChange = (e) => changeFn(e.target.value);

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control value={initialState} onChange={handleChange} type={type} />
    </Form.Group>
  );
};
