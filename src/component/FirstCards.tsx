
import { Container, Row, Col, Card } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

function FirstCards() {
  return (
    <Container fluid={true} className='ms-auto me-auto'>
      <Row>
        <Col>
          <h1 className='text-light mt-3'>Novità</h1>
          <hr className='HR text-light'></hr>
          <div className='d-flex flex-wrap'>
            <div>
              <p className='text-light mb-0 d-none d-sm-block'>NUOVA STAZIONE RADIO</p>
              <h5 className='text-light mb-3 d-none d-sm-block'>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</h5>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='p-3'>
         
          <div className='d-flex justify-content-between'>
            <Card className='image border-0 me-5 ms-0 p-0'  >
              <Card.Img src="assets/images/1a.png" className='fs-5 w-100 h-100'/>
            </Card>
            <Card className='border-0'>
              <Card.Img src="assets/images/1b.png" />
            </Card>
          </div>
          <div>
            <h6 className='mt-5 text-light'>Nuovi episodi radio</h6>
          </div>
        </Col>
      </Row>
      <Row className='d-flex '>
        <Col sm={8}  md={3} lg={3} xl={2} className='mb-3 ms-auto me-auto'>
          <Card className='border-0 rounded-1 bg-black '>
            <Card.Img src="assets/images/2a.png" />
            <div className="bg-black ">

                    <Card.Title className="text-light border-0 p-0 mt-2 fs-5">Pròlogo con Abuelo</Card.Title>
                  </div>
                   
                 
          </Card>
        </Col>
        <Col sm={8} md={3} lg={3} xl={2} className='mb-3 ms-auto me-auto'>
          <Card className='border-0 rounded-1 bg-black'>
            <Card.Img src="assets/images/2b.png" />
            <div className="bg-black ">

<Card.Title className="text-light border-0 p-0 mt-2 fs-5">The Wanderer</Card.Title>
</div>
          </Card>
        </Col>
        <Col sm={8} md={3} lg={3} xl={2} className='mb-3 ms-auto me-auto'>
          <Card className='border-0 rounded-1 bg-black'>
            <Card.Img src="assets/images/2c.png" />
            <div className="bg-black ">

<Card.Title className="text-light border-0 p-0 mt-2 fs-5">Michael Bublé & Carly Pearce</Card.Title>
</div>
          </Card>
        </Col>
        <Col sm={8} md={3} lg={3} xl={2} className='mb-3 ms-auto me-auto'>
          <Card className='border-0 rounded-1 bg-black'>
            <Card.Img src="assets/images/2d.png" />
            <div className="bg-black ">

<Card.Title className="text-light border-0 p-0 mt-2 fs-5">Stephan Moccio: The Zane Lowe Interview</Card.Title>
</div>
          </Card>
        </Col>
        <Col sm={8} md={3} lg={2} xl={2} className='mb-3 d-none d-xl-block ms-auto me-auto'>
          <Card className='border-0 rounded-1 bg-black'>
            <Card.Img src="assets/images/2e.png" />
            <div className="bg-black ">

<Card.Title className="text-light border-0 p-0 mt-2 fs-5">Chart Spotlight: julia Michaels</Card.Title>
</div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FirstCards;
