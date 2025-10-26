import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          {"HürriyetApp"}
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="text-danger fw-bold">HABER SİTESİ</h5>
            <p className="small text-light">Baturalp özbilir</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="text-white">Kategoriler</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#gundem"
                  className="text-light text-decoration-none small"
                >
                  Gündem
                </a>
              </li>
              <li>
                <a
                  href="#politika"
                  className="text-light text-decoration-none small"
                >
                  Politika
                </a>
              </li>
              <li>
                <a
                  href="#spor"
                  className="text-light text-decoration-none small"
                >
                  Spor
                </a>
              </li>
              <li>
                <a
                  href="#top"
                  className="text-light text-decoration-none small"
                >
                  Ekonomi
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="text-white">İletişim</h5>
            <p className="text-light small mb-1">
              Adres: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ab doloribus culpa quisquam, pariatur ex consectetur
              itaque ipsa reprehenderit officia ullam accusantium labore placeat
              aperiam, libero rerum fugit, amet inventore!
            </p>
            <p className="text-light small">
              E-posta: Baturalpozbilir7@gmail.com
            </p>
          </Col>
        </Row>

        <Row className="mt-4 border-top border-secondary pt-3">
          <Col className="text-center">
            <p className="mb-0 small text-light">
              &copy; {new Date().getFullYear()} Haber Sitesi. Tüm hakları
              saklıdır.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
