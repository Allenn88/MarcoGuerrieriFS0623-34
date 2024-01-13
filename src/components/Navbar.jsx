import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link  }from 'react-router-dom';
import "./style/Navbar.css";

function ContainerInsideExample() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
        <Link to="/">
        <Navbar.Brand>Home</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;