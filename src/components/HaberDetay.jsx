import { useParams } from "react-router-dom";
import { fakeHaberler } from "../data/haberler";
import Footer from "./Footer1";
import Header from "./Header";
import { Button } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";

function HaberDetay() {
  const { id } = useParams();

  const haber = fakeHaberler.find((h) => h.id === parseInt(id));
  const { baslik, ozet, resimUrl, kategori } = haber || {};

  if (!haber) {
    return <div>Haber bulunamadı.</div>;
  }

  return (
    <div className="bg-light bg-gradient">
      <Header />
      <div className="container-sm">
        <Button
          onClick={() => window.history.back()}
          variant="outline-danger"
          className="mb-3"
        >
          Geri Dön
        </Button>
      </div>
      <Card className="mb-3">
        <Row className="g-0">
          <Col xs={12} md={4}>
            <img
              src={resimUrl}
              alt={baslik}
              className="img-fluid"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col xs={12} md={8}>
            <Card.Body>
              <p className="text-danger small">{kategori.toUpperCase()}</p>
              <Card.Title>{baslik}</Card.Title>
              <Card.Text>{ozet}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <div className="container-sm mb-5 d-flex gap-3 fs-3">
        <i class="bi bi-facebook"> /</i>
        <i class="bi bi-twitter"> /</i>
        <i class="bi bi-whatsapp"></i>
      </div>
      <Footer />
    </div>
  );
}
export default HaberDetay;
