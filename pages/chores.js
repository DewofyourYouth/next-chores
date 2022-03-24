import { Table, Container } from "react-bootstrap";

function Chores({ data }) {
  return (
    <Container>
      {" "}
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
  const res = await fetch("http://localhost:3000/api/airtable");
  const data = await res.json();
  return { props: { data } };
}

export default Chores;
