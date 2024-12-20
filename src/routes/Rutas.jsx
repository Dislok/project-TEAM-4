import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CambioColor, FooterComponent, Header } from '../components';
import { Agenda, DetalleRubro, Error404, Evaluacion, InformacionInstitucional, InformeActividades, Inicio, Servicios, Transparencia } from '../pages';
import { useTheme } from '../context';
import { useDataLoader } from '../hooks';
import { Container, Spinner } from 'react-bootstrap';

export const Rutas = () => {
  const { theme } = useTheme();
  const { isLoading } = useDataLoader();

  if (isLoading) {
    return (
      <div style={{
        backgroundColor: "#A02142",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Spinner animation="border" role="status" style={{ color: 'white' }}>
          <span className="visually-hidden"></span>
        </Spinner>
      </div>
    );
  }

  return (
    <Router>
      <Container fluid className={`d-flex flex-column min-vh-100 p-0 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <Header />
        <CambioColor />
        <Container fluid as="main" className="flex-grow-1 px-0" style={{ marginTop: '7vh' }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/*" element={<Error404 />} />
            <Route path="/Agenda" element={<Agenda />} />
            <Route path="/Rubros" element={<Transparencia />} />
            <Route path="/Transparencia/Rubros/:nombre" element={<DetalleRubro />} />
            <Route path="/InformeActividades" element={<InformeActividades />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route path="/Evaluacion" element={<Evaluacion />} />
            <Route path="/InformacionInstitucional" element={<InformacionInstitucional />} />
          </Routes>
        </Container>
        <FooterComponent />
      </Container>
    </Router>
  );
};