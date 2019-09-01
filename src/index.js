import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { number } from "prop-types";
import { Row, Col, Container } from "react-grid-system";

function Bilesen(props) {
  return (
    <Container style={{ marginTop: 3 }}>
      <Row>
        <Col>
          <Row>
            <Col>{props.kupur}</Col>
            <Col>
              <input
                style={{ borderRadius: 5, width: 100 }}
                id="adet"
                type={number}
                onChange={() => {}}
              />
            </Col>
            <Col>
              <input
                style={{ borderRadius: 5, width: 100 }}
                id="tutar"
                type={number}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function TitleIle(props) {
  return (
    <Container>
      <HeaderFooter baslik="Tutar:" value="12536.25" />
      <Baslik />
      {props.kupurler.map(item => (
        <Bilesen kupur={item} />
      ))}
      <HeaderFooter baslik="Fark:" value="12536.25" />
    </Container>
  );
}

function HeaderFooter(props) {
  return (
    <Container style={{ marginTop: 3, marginBottom: 20 }}>
      <Row>
        <Col>
          <Row>
            <Col>
              <h4>{props.baslik}</h4>
              <h4 className="h4Style">{props.value}</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  const [obje, setObje] = useState({
    kupurler: ["0.05", "0.10", "0.25", "0.50", "1", "5", "10", "20"]
  });

  return (
    <div className="ElementCentered">
      <TitleIle kupurler={obje.kupurler} />
    </div>
  );
}

function Baslik() {
  return (
    <Container style={{ marginTop: 3, marginBottom: 20 }}>
      <Row>
        <Col>
          <Row>
            <Col>Küpür</Col>
            <Col>Adet</Col>
            <Col>Tutar</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function CenterDeneme() {
  return (
    <div className="ElementCentered">
      <Container style={{ marginTop: 3, display: "flex" }}>
        <Row>
          <Col>
            <Row>
              <Col>Küpür</Col>
              <Col>Adet</Col>
              <Col>Tutar</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
