import React, { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./evaluacion.css";
import { useTheme } from "../../context/ThemeContext";
import { DocumentTable, useEvaluacionData } from "./components";


export const Evaluacion = () => {
  const { theme } = useTheme();
  const { documentData } = useEvaluacionData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className={theme === 'dark' ? 'bg-dark text-light' : 'bg-light'}>
      <Row>
        <Col>
          <h2 className="ldf_titulo">Evaluación y Monitoreo a Programas 2024</h2>
          <hr className="hr-gob" />
        </Col>
      </Row>

      <Row>
        <Col>
          <DocumentTable documentData={documentData} />
        </Col>
      </Row>

      <hr />
      <br />
      <br />
    </Container>
  );
};