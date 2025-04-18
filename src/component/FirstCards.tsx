
import { Container, Row, Col, Card } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

function FirstCards() {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
        <h1 className='text-light mt-3'>Novità</h1>
<hr className='HR text-light'></hr>
<div className='d-flex  '>
    <div >
<p className='text-light mb-0 ' >NUOVA STAZIONE RADIO</p>
<h3 className='text-light'>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</h3>
</div>
<div >
<p className=' text-light ms-5 mb-0 '>NUOVA STAZIONE RADIO</p>
<h3 className=' text-light ms-5 mb-4 '>Ecco la nuova musica latina</h3>
</div>
</div>
        </Col>
      </Row>
      <Row>
        <Col className='p-0'>
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
      <Row className='d-flex justify-content-between '>
        <Col xs={12} md={4} lg={2} className='mb-3'>
          <Card className='border-0'>
            <Card.Img src="assets/images/2a.png"  />
          </Card>
        </Col>
        <Col xs={12} md={4} lg={2} className='mb-3'>
          <Card className='border-0'>
            <Card.Img src="assets/images/2b.png" />
          </Card>
        </Col>
        <Col xs={12} md={4} lg={2} className='mb-3'>
          <Card className='border-0'>
            <Card.Img src="assets/images/2c.png" />
          </Card>
        </Col>
        <Col xs={12} md={4} lg={2} className='mb-3 d-none d-lg-block'>
          <Card className='border-0'>
            <Card.Img src="assets/images/2d.png" />
          </Card>
        </Col>
        <Col xs={12} md={4} lg={2} className='mb-3 d-none d-lg-block'>
          <Card className='border-0'>
            <Card.Img src="assets/images/2e.png" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FirstCards;