import { useEffect, useMemo, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { informesActividades } from "../../json/informesActividades";
import { Container, Row, Col } from 'react-bootstrap';
import { InformeCard } from "./components/InformeCard";
import Busqueda from "../../components/Busqueda/Busqueda";

export const InformeActividades = () => {
  const { theme } = useTheme();
  const [busqueda, setBusqueda] = useState("");
  const [filteredInformes, setFilteredInformes] = useState(informesActividades);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (searchTerm) => {
    setBusqueda(searchTerm);
    console.log(informesActividades);
    
    const filtered = informesActividades.filter((item) =>
      item.informe.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInformes(filtered);
  };

  const renderedInformes = useMemo(() => (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {filteredInformes.map((item, index) => (
        <Col key={index}>
          <InformeCard item={item} theme={theme} />
        </Col>
      ))}
    </Row>
  ), [theme, filteredInformes]);

  return (
    <Container className={theme === 'dark' ? 'bg-dark text-light' : 'bg-light'}>
      <Row>
        <Col>
          <h3 className="mt-4 mb-3">
            Informe Anual de Actividades de la Presidenta del Patronato
          </h3>
          <hr className="hr-gob" />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <Busqueda busqueda={busqueda} onSearch={handleSearch} />
        </Col>
      </Row>
      {renderedInformes}
      <Row>
        <Col>
          <hr className="hr-gob mt-4 mb-4" />
        </Col>
      </Row>
    </Container>
  );
};