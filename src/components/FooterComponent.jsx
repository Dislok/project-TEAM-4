import React from 'react';
import { Container } from 'react-bootstrap';

export const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{
      width: '100%',
      minHeight: '10vh',
      marginTop: 'auto'
    }}>
      <Container>
        <p className="text-center mb-0">© 2024 Mi Sitio. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};