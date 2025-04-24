import Navbar from 'react-bootstrap/Navbar';
import { Container, Button, Dropdown } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarMusic() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="px-3 py-2">
      <Container fluid className="d-flex justify-content-between align-items-center flex-wrap">
        
       
        <div className="d-flex align-items-center gap-3 order-1">
          <i className="bi bi-shuffle text-secondary fs-5 d-none d-md-block"></i>
          <i className="bi bi-rewind text-secondary fs-5 d-none d-md-block"></i>
          <i className="bi bi-play text-secondary fs-5 d-none d-md-block"></i>
          <i className="bi bi-fast-forward text-secondary fs-5 d-none d-md-block"></i>
          <i className="bi bi-repeat text-secondary fs-5 d-none d-md-block"></i>

         
          <Dropdown className="d-block d-md-none ">
            <Dropdown.Toggle variant="danger" size="sm" >
              ☰
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Novità</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Radio</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        
        <div className="order-2 ms-auto header-section text-center d-none d-md-block">
          <i className="bi bi-apple text-light fs-4"></i>
        </div>

     
        <div className="order-2 ms-auto text-center d-flex d-md-none">
          <i className="bi bi-apple text-light fs-4">Music</i>
        </div>

       
        <div className="d-flex align-items-center gap-3 order-3 ms-auto">
          <p className='text-danger mb-0 d-flex d-lg-none'>Accedi</p>
          <i className="bi bi-volume-up-fill text-secondary fs-4 d-none d-md-block"></i>
          <Button className="bg-danger border-0 d-flex align-items-center gap-2 px-3 d-none d-lg-block">
            <i className="bi bi-person-fill fs-5"></i> <span className="d-none d-sm-inline"><strong>Accedi</strong></span>
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarMusic;
