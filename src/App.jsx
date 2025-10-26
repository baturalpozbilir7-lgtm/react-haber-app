import React, { useState } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer1";
import HaberKarti from "./components/HaberKarti";
import { fakeHaberler } from "./data/haberler";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  // 1
  const mansetHaberler = fakeHaberler.filter((h) => h.manset);

  const gundemHaberleri = fakeHaberler.filter(
    (h) => !h.manset && h.kategori.toLowerCase() === "gündem"
  );
  const politikaHaberleri = fakeHaberler.filter(
    (h) => !h.manset && h.kategori.toLowerCase() === "politika"
  );
  const sporHaberleri = fakeHaberler.filter(
    (h) => !h.manset && h.kategori.toLowerCase() === "spor"
  );

  const gundemGosterilecekler = gundemHaberleri.slice(0, 4);
  const politikaGosterilecekler = politikaHaberleri.slice(0, 4);
  const sporGosterilecekler = sporHaberleri.slice(0, 4);

  const KategoriListesi = ({ kategoriAdi, haberler, id }) => (
    <div id={id}>
      <h3 className="mb-3 border-bottom border-danger pb-2 pt-4">
        <span className="text-danger fw-bold">{kategoriAdi.toUpperCase()}</span>
      </h3>
      <Row className="mb-5">
        {haberler.map((haber) => (
          <Col key={haber.id} xs={12} md={4} lg={4} className="mb-4">
            {" "}
            <HaberKarti
              id={haber.id}
              baslik={haber.baslik}
              ozet={haber.ozet}
              resimUrl={haber.resimUrl}
              kategori={haber.kategori}
            />
          </Col>
        ))}
      </Row>
    </div>
  );

  return (
    <>
      <Header />

      <Container className="my-4">
        <Row className="mb-5">
          <Col xs={12}>
            <Carousel
              activeIndex={activeIndex}
              onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
              indicators={false}
              controls={false}
              interval={null}
            >
              {mansetHaberler.map((haber, index) => (
                <Carousel.Item key={haber.id}>
                  <Card className="bg-light border shadow-sm">
                    <Row className="g-0">
                      <Col xs={12} md={6}>
                        <img
                          src={haber.resimUrl}
                          alt={haber.baslik}
                          className="img-fluid rounded-start w-100 h-100"
                          style={{ objectFit: "cover" }}
                        />
                      </Col>
                      <Col
                        xs={12}
                        md={6}
                        className="p-4 d-flex flex-column justify-content-center"
                      >
                        <p
                          className="text-danger small"
                          style={{ fontWeight: 700 }}
                        >
                          {haber.kategori.toUpperCase()}
                        </p>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>
                          {haber.baslik}
                        </h2>
                        <p className="lead text-dark">{haber.ozet}</p>
                        <div className="mt-3">
                          {mansetHaberler.map((_, dotIndex) => (
                            <span
                              key={dotIndex}
                              className={`me-2 px-3 py-1 border border-danger ${
                                activeIndex === dotIndex
                                  ? "bg-danger text-white"
                                  : "bg-white text-danger"
                              }`}
                              style={{
                                cursor: "pointer",
                                fontWeight: "bold",
                                transition: "all 0.3s",
                              }}
                              onMouseEnter={() => setActiveIndex(dotIndex)}
                            >
                              {dotIndex + 1}
                            </span>
                          ))}
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        <Row>
          <Col md={9}>
            {gundemGosterilecekler.length > 0 && (
              <KategoriListesi
                id="gundem"
                kategoriAdi="Gündem"
                haberler={gundemGosterilecekler}
              />
            )}

            {politikaGosterilecekler.length > 0 && (
              <KategoriListesi
                id="politika"
                kategoriAdi="Politika"
                haberler={politikaGosterilecekler}
              />
            )}

            {sporGosterilecekler.length > 0 && (
              <KategoriListesi
                id="spor"
                kategoriAdi="Spor"
                haberler={sporGosterilecekler}
              />
            )}
          </Col>
          <Col md={3} className="">
            <div className="pt-4 sticky-top" style={{ top: "80px" }}>
              <h4 className="mb-3 text-secondary border-bottom pb-2">Reklam</h4>

              <div
                className="bg-warning text-white p-3 mb-4 rounded text-center"
                style={{ height: "250px" }}
              >
                <p className="lead fw-bold mb-0">Reklam</p>
                <p className="small">Reklam</p>
              </div>

              <div className="bg-info text-white p-3 mb-4 rounded text-center">
                <p className="lead fw-bold mb-0">HAVA DURUMU</p>
                <p className="small"></p>
              </div>

              <div
                className="bg-dark text-white p-3 mb-4 rounded text-center"
                style={{ height: "300px" }}
              >
                <p className="lead fw-bold mb-0">Reklam</p>
                <p className="small">Reklam</p>
              </div>
            </div>
          </Col>{" "}
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default App;
