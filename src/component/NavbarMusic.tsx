import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Container, Row, Col, Button } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";


function NavbarMusic() {
  return (
    <Container fluid={true} className='p-0 '>
      <Row>
        <Col >
          <Navbar bg="dark" data-bs-theme="dark">
           
              <div>
                <i className="bi bi-shuffle me-2 text-secondary-emphasis"></i>
                <i className="bi bi-rewind text-secondary-emphasis me-2"></i>
                <i className="bi bi-play text-secondary-emphasis me-2"></i>
                <i className="bi bi-fast-forward text-secondary-emphasis me-2"></i>
                <i className="bi bi-repeat text-secondary-emphasis me-2"></i>
              </div>
              <section className="header-section ">
              <i className="bi bi-apple text-light "></i>
                  </section>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <div>
                  <i className="bi bi-volume-up-fill text-secondary-emphasis fs-4" ></i>
                  </div>
                  
                 <Button className='me-4 bg-danger border-0 '><i className="bi bi-person-fill bg-none fs-5"></i> Accedi</Button>
                  
                </Nav>
              </Navbar.Collapse>
            
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default NavbarMusic;