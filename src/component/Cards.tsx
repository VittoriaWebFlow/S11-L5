import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { OmbdData } from "../types";

const API = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

function Cards() {
  const [OmbdData, setOmbdData] = useState<OmbdData | null>(null);

  const getMusic = async () => {
    try {
      const response = await fetch(API);
      if (response.ok) {
        const data: OmbdData = await response.json();
        console.log('Data', data);
        setOmbdData(data);
      } else {
        throw new Error('ERRORE NEL CARICAMENTO');
      }
    } catch (error) {
      console.log('ERRORE', error);
    }
  };

  useEffect(() => {
    getMusic();
  }, []);

  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <h6 className="text-light mt-5">Nuove uscite</h6>
          <div className="d-flex flex-wrap justify-content-between">
            {OmbdData?.data.slice(0, 10).map((item) => (
              <Col key={item.id} sm={6} md={3} lg={2} className="me-3 border-0 mb-4">
                <Card className="w-100 h-100 border-0 rounded-1 bg-black">
                  <Card.Img variant="top" src={item.album.cover} className="" />
                  <div className="bg-black ">
                  <Card.Body className="bg-black border-0 p-0 ">
                    <Card.Title className="text-light bg-black border-0 p-0 mt-2">{item.title}</Card.Title>
                    <Card.Text className="text-light p-0">
                      {item.artist.name}
                    </Card.Text>
                  </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
