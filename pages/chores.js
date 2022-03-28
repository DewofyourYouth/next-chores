import axios from "axios";
import { Table, Container } from "react-bootstrap";

function Chores({ data }) {
  if (!data) return <div>Loading...</div>;
  return (
    <Container>
      <Table striped hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Points</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data
            .sort((a, b) => (a.Points > b.Points ? 1 : -1))
            .map((d, i) => (
              <tr key={i}>
                <td>{d.Name}</td>
                <td>{d.Description}</td>
                <td>{d.Points}</td>
                <td>{d.Type}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:3000/api/chores");
  return { props: { data } };
}

export default Chores;
