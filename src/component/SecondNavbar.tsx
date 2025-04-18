
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function VerticalNavbar() {
  return (
    <Container fluid={true} className='p-0'>
      <Row>
        <Col xs={12} md={3} lg={2} className="d-none d-md-block">
          <Navbar bg="dark" variant="dark" className="h-100">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
        </Col>
        
      </Row>
    </Container>
  );
}

export default VerticalNavbar;