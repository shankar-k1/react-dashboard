import Table from 'react-bootstrap/Table'
import "../styles/information.css";
import Button from 'react-bootstrap/Button';


export const Options = () => {
  return (
    <><div className="tabe">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Application Name</th>
            <th>Server</th>
            <th>Service ID</th>
            <th>Operating Environment</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Case Install Application - CIA</td>
            <td>
              
              <Button variant="outline-success">Cloud</Button>{' '}</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Integrated Enterprise Enrollment Engine - IE3</td>
            <td><Button variant="outline-success" data-bs-toggle="tooltip" data-bs-placement="right" title="IBM PRIVATE CLOUD DC04"> On-Prem</Button>{' '}</td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Electronic Eligiblity transfer - EET R3N0</td>
            <td><Button variant="outline-success">On-Prem</Button>{' '}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Enterprise Enrollment Gateway - EEG</td>
            <td><Button variant="outline-success">Cloud</Button>{' '}</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div><iframe src=""width={500} height={500} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"></iframe></>
  );
};
