import { useEffect, useMemo, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { informesActividades } from "../../json/informesActividades";
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { InformeCard } from "./components/InformeCard";
import Busqueda from "../../components/Busqueda/Busqueda";

export const InformeActividades = () => {
  const { theme } = useTheme();
  const [busqueda, setBusqueda] = useState("");
  const [filteredInformes, setFilteredInformes] = useState(informesActividades);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (searchTerm) => {
    setBusqueda(searchTerm);
    const filtered = informesActividades.filter((item) =>
      item.informe.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInformes(filtered);
  };

  const handleInformeClick = (item) => {
    navigate(`/InformeActividades/${item.anio}`, { state: { informe: item } });
  };

  const renderedInformes = useMemo(() => (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {filteredInformes.map((item, index) => (
        <Col key={index}>
          <div onClick={() => handleInformeClick(item)} style={{ cursor: 'pointer' }}>
            <InformeCard item={item} theme={theme} />
          </div>
        </Col>
      ))}
    </Row>
  ), [theme, filteredInformes, navigate]);

  return (
    <Container>
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